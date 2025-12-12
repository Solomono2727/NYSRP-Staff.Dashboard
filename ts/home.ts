export function renderHome(){
  const mainContent = document.getElementById("mainContent");
  if(mainContent){
    mainContent.innerHTML = `
      <h2 class="text-3xl text-cyan-400 font-bold mb-4">Welcome to NYSRP Dashboard</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="glass-card p-6 rounded-2xl shadow-lg">
          <h3 class="text-cyan-400 font-bold text-xl mb-2">Staff Online</h3>
          <p class="text-white text-lg">5/10</p>
        </div>
        <div class="glass-card p-6 rounded-2xl shadow-lg">
          <h3 class="text-cyan-400 font-bold text-xl mb-2">Active Reports</h3>
          <p class="text-white text-lg">12</p>
        </div>
        <div class="glass-card p-6 rounded-2xl shadow-lg">
          <h3 class="text-cyan-400 font-bold text-xl mb-2">Pending Trainings</h3>
          <p class="text-white text-lg">3</p>
        </div>
      </div>
    `;
  }
}
