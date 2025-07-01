
 // JAVASCRIPT FILE: script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const status = document.getElementById('status');

  // Dummy login check
  if (username === "admin" && password === "securepass") {
    status.style.color = 'lightgreen';
    status.textContent = "Login successful. Accessing OmniCloud...";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    status.style.color = 'red';
    status.textContent = "Invalid login credentials.";
  }
});