if(localStorage.getItem("nysrpAuth") !== "true") window.location.href = "index.html";

import { renderHome } from '../ts/home.js';
import { renderActivity } from '../ts/activity.js';
import { renderModeration } from '../ts/moderation.js';
import { renderTraining } from '../ts/training.js';
// …import all other modules similarly

const mainContent = document.getElementById("mainContent");
const sidebarItems = document.querySelectorAll(".sidebar-item");

// Default load Home
loadModule('home');

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const page = item.getAttribute("data-page");
    setActiveSidebar(page);
    loadModule(page);
  });
});

function setActiveSidebar(page){
  sidebarItems.forEach(i => i.classList.remove('bg-white/20'));
  const active = document.querySelector(`.sidebar-item[data-page="${page}"]`);
  if(active) active.classList.add('bg-white/20');
}

function loadModule(page){
  switch(page){
    case 'home': renderHome(); break;
    case 'activity': renderActivity(); break;
    case 'moderation': renderModeration(); break;
    case 'training': renderTraining(); break;
    // …all other cases
    default: mainContent.innerHTML = `<p>Page not found</p>`;
  }
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("nysrpAuth");
  window.location.href = "index.html";
});
