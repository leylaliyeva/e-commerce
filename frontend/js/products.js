const BASE_URL = "http://localhost:3000/api/products";

async function getProducts() {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  const productsDiv = document.getElementById("products");

  productsDiv.innerHTML = "";

  data.data.forEach((product) => {
    productsDiv.innerHTML += `
      <div class="card">
        <h3>${product.title}</h3>
        <p>${product.price} AZN</p>

        <button onclick="deleteProduct('${product._id}')">
          Delete
        </button>
      </div>
    `;
  });
}

async function createProduct() {
  const token = localStorage.getItem("token");

  const productData = {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
  };

  await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  getProducts();
}

async function deleteProduct(id) {
  const token = localStorage.getItem("token");

  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  getProducts();
}

getProducts();