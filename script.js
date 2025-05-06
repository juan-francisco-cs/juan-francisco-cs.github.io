const apiUrl = "https://ventas-api-518727385555.europe-west1.run.app";

document.getElementById("prediction-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const item = document.getElementById("item").value;
  const store_code = document.getElementById("store_code").value;
  const week = parseInt(document.getElementById("week").value);
  const year = parseInt(document.getElementById("year").value);

  try {
    const response = await fetch(`${apiUrl}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item, store_code, week, year })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.detail || "Unknown error");
    }

    document.getElementById("result").textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    document.getElementById("result").textContent = "Error: " + error.message;
  }
});
