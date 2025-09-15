// sidebar.js
document.addEventListener("DOMContentLoaded", function() {
  const sidebar = `
    <div class="sidebar">
      <a href="index.html">🖥️ dashboard</a>
      <a href="financials.html">💰 Financials</a>
      <a href="sales.html">🧾 Sales - A/R</a>
      <a href="purchasing.html">📦 Purchasing - A/P</a>
    </div>
  `;

/* All menu
  const sidebar = `
    <div class="sidebar">
      <a href="index.html">🖥️ dashboard</a>
      <a href="admin.html">🏠 Administration</a>
      <a href="financials.html">💰 Financials</a>
      <a href="opportunities.html">📊 Opportunities</a>
      <a href="sales.html">🧾 Sales - A/R</a>
      <a href="purchasing.html">📦 Purchasing - A/P</a>
      <a href="bp.html">👥 Business Partners</a>
      <a href="banking.html">🏦 Banking</a>
      <a href="inventory.html">📂 Inventory</a>
      <a href="production.html">⚙️ Production</a>
      <a href="reports.html">📑 Reports</a>
    </div>
  `;
*/

  // หาตำแหน่งที่ต้องการวาง sidebar
  document.getElementById("sidebar-container").innerHTML = sidebar;
});
