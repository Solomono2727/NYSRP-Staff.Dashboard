const PASSWORD = "NYSRP2025";
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", () => {
  if(passwordInput.value === PASSWORD){
    localStorage.setItem("nysrpAuth", "true");
    window.location.href = "dashboard.html";
  } else {
    errorMsg.style.display = "block";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

passwordInput.addEventListener("keyup", (e) => {
  if(e.key === "Enter") loginBtn.click();
});

if(localStorage.getItem("nysrpAuth") === "true"){
  window.location.href = "dashboard.html";
}
