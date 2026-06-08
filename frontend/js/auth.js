const BASE_URL = "http://localhost:3000";

async function register() {
  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    console.log("user email is :");
    console.log(userData.email);
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    alert(data.message);
  } catch (error) {
    console.log(error);
  }
}

async function login() {
  const loginData = {
    email: document.getElementById("loginEmail").value,
    password: document.getElementById("loginPassword").value,
  };

  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    localStorage.setItem("token", data.token);

    alert("Login successful");
  } catch (error) {
    console.log(error);
  }
}