document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent page reload
  
    // Define admin credentials
    const adminEmail = "admin@example.com";
    const adminPassword = "password123";
  
    // Get user input
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
  
    // Validate credentials
    if (email === adminEmail && password === adminPassword) {
      alert("Login successful! Redirecting...");
      window.location.href = "admin.html"; // Redirect to dashboard
    } else {
      alert("Invalid email or password.");
    }
  });
  