function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("showPassword");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.textContent = "Hide Password";
    } else {
      passwordInput.type = "password";
      showPasswordButton.textContent = "Show Password";
    }
  }