document.querySelector(".btn").addEventListener("click", function () {
    // Define admin credentials
    const adminEmail = "admin@example.com";
    const adminPassword = "password123";
  
    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
  
    // Simple validation
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
  
    // Check credentials
    if (email === adminEmail && password === adminPassword) {
      alert("Login successful! Redirecting...");
      window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
      alert("Invalid email or password.");
    }
  });
  