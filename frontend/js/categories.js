const BASE_URL = "http://localhost:3000/api/categories";

async function getCategories() {
  const response = await fetch(BASE_URL);

  const data = await response.json();

  const categoriesDiv = document.getElementById("categories");

  categoriesDiv.innerHTML = "";

  data.data.forEach((category) => {
    categoriesDiv.innerHTML += `
      <div class="card">
        <h3>${category.name}</h3>
        <p>${category.description || ""}</p>

        <button onclick="deleteCategory('${category._id}')">
          Delete
        </button>
      </div>
    `;
  });
}

async function createCategory() {
  const token = localStorage.getItem("token");

  const categoryData = {
    name: document.getElementById("categoryName").value,
    description: document.getElementById("categoryDescription").value,
  };

  await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(categoryData),
  });

  getCategories();
}

async function deleteCategory(id) {
  const token = localStorage.getItem("token");

  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  getCategories();
}

getCategories();