document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forecastForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const item = document.getElementById("item").value;
    const store_code = document.getElementById("store").value;
    const week = parseInt(document.getElementById("week").value);
    const year = parseInt(document.getElementById("year").value);

    try {
      const response = await fetch("https://ventas-api-518727385555.europe-west1.run.app/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item, store_code, week, year }),
      });

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      const data = await response.json();
      document.getElementById("result").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      document.getElementById("result").textContent = "Error: " + error.message;
    }
  });
});
