document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent page reload
  
    // Define admin credentials
    const adminEmail = "admin@example.com";
    const adminPassword = "password123";
  
    // Get user input
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pass");
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
  
    // Clear any previous error styles
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
  
    // Validate input fields
    if (!email || !password) {
      // Highlight empty inputs in red
      if (!email) emailInput.classList.add("error");
      if (!password) passwordInput.classList.add("error");
      return;
    }
  
    // Validate credentials
    if (email === adminEmail && password === adminPassword) {
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      // Highlight both fields if credentials are incorrect
      emailInput.classList.add("error");
      passwordInput.classList.add("error");
    }
  });
  