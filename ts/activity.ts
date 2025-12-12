export function renderActivity() {
  const content = document.getElementById("mainContent");
  if(content){
    content.innerHTML = `
      <h2 class="text-2xl font-bold mb-4">Staff Activity Tracker</h2>
      <p>Module placeholder: Activity data will display here.</p>
    `;
  }
}
