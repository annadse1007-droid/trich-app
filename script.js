const API_URL = "https://script.google.com/macros/s/AKfycbzDTp2gUfjowdpDfz914BPqOlLB6ePPMPoIIli2GVLlBuln8ExMcAjnyFTQgpDrHJRRlg/exec?action=latestResult";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = `Hello ${data.name}`;

    document.getElementById("wealthBar").style.width = (data.wealth_pct * 100) + "%";
    document.getElementById("healthBar").style.width = (data.health_pct * 100) + "%";
    document.getElementById("purposeBar").style.width = (data.purpose_pct * 100) + "%";

    document.getElementById("wealthText").innerText =
      `${data.wealth_score} - ${data.wealth_tier}`;

    document.getElementById("healthText").innerText =
      `${data.health_score} - ${data.health_tier}`;

    document.getElementById("purposeText").innerText =
      `${data.purpose_score} - ${data.purpose_tier}`;

    document.getElementById("level").innerText =
      `Overall Level: ${data.level}`;
  })
  .catch(err => {
    document.body.innerHTML = "Failed to load results";
    console.error(err);
  });
