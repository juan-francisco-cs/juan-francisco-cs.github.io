document.getElementById("forecastForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const item = document.getElementById("item").value;
  const store_code = document.getElementById("store").value;
  const week = parseInt(document.getElementById("week").value);
  const year = parseInt(document.getElementById("year").value);

  const response = await fetch("https://ventas-api-518727385555.europe-west1.run.app/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item, store_code, week, year }),
  });

  if (!response.ok) {
    alert("Error: " + response.status);
    return;
  }
  console.log(JSON.stringify({ item, store_code, week, year }));
  const data = await response.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
});
