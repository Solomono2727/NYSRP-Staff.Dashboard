const PASSWORD = "NYSRP2025";
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", () => {
  if (passwordInput.value === PASSWORD) {
    localStorage.setItem("nysrpAuth", "true");
    window.location.href = "dashboard.html";
  } else {
    errorMsg.classList.remove("hidden");
  }
});

// Redirect if already logged in
if (localStorage.getItem("nysrpAuth") === "true" && window.location.pathname.endsWith("index.html")) {
  window.location.href = "dashboard.html";
}
