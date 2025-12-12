if (localStorage.getItem("nysrpAuth") !== "true") {
  window.location.href = "index.html";
}

const mainContent = document.getElementById("mainContent");
const sidebarItems = document.querySelectorAll(".sidebar-item");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const page = item.getAttribute("data-page");
    loadPage(page);
  });
});

function loadPage(page) {
  mainContent.innerHTML = `<h2 class="text-2xl font-bold mb-2">${page.toUpperCase()}</h2>
  <p class="text-gray-300">Content for ${page} will go here.</p>`;
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("nysrpAuth");
  window.location.href = "index.html";
});
