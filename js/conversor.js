const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const direction = document.querySelector('input[name="direction"]:checked').value;

  if (isNaN(amount) || amount <= 0) {
    result.textContent = "⚠️ Introduce una cantidad válida.";
    return;
  }

  // Tasas de cambio (puedes actualizarlas)
  const EUR_TO_USD = 1.08;
  const USD_TO_EUR = 0.93;

  let converted = 0;
  let symbolFrom, symbolTo;

  if (direction === "eurusd") {
    converted = amount * EUR_TO_USD;
    symbolFrom = "€";
    symbolTo = "$";
  } else {
    converted = amount * USD_TO_EUR;
    symbolFrom = "$";
    symbolTo = "€";
  }

  result.textContent = `${symbolFrom}${amount.toFixed(2)} = ${symbolTo}${converted.toFixed(2)}`;
});
