// sidebar.js
document.addEventListener("DOMContentLoaded", function() {
  const sidebar = `
    <div class="sidebar">
      <a href="index.html">🏠 dashboard</a>
      <a href="remote.html">🖥️ Remote RPD.</a>
      <a href="general.html">🗃️ General</a>
      <a href="financials.html">💰 Financials</a>
      <a href="sales.html">🧾 Sales - A/R</a>
      <a href="purchasing.html">📦 Purchasing - A/P</a>
      <a href="Inventory.html">📝 Inventory</a>
      <a href="production.html">⚙️ Production</a>
      <a href="Trans.html">🚗 ISS Transportation</a>
      <a href="Billing.html">💵 Billing Process</a>
      <a href="ErrorNote.html">🎯 Error Note</a>
       <a href="ProRequest.html">🛠️ Pro Request</a>
        <a href="booking.html">🚚 booking</a>
      <a href="Vdo.html">🎬 VDO Training</a>
    </div>
  `;

/* All menu
  const sidebar = `
    <div class="sidebar">
      <a href="index.html">🖥️ dashboard</a>
      <a href="remote.html">🖥️ Remote RPD.</a>
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

