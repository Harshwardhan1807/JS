document.addEventListener('DOMContentLoaded', () => {
  const numberInput = document.getElementById('number-input');
  const generateBtn = document.getElementById('generate-btn');
  const resetBtn = document.getElementById('reset-btn');
  const tableResult = document.getElementById('table-result');
  generateBtn.addEventListener('click', () => {
    const number = parseInt(numberInput.value, 10);
    if (isNaN(number) || number === 0) {
      tableResult.innerHTML = '<p style="color: red;">Please enter a non-zero number.</p>';
      return;
    }
    let tableHTML = `<h2>Table for ${number}:</h2>`;
    let i = 1;
    while (i <= 10) {
      tableHTML += `<p>${number} &times; ${i} = ${number * i}</p>`;
      i++;
    }
    tableResult.innerHTML = tableHTML;
  });
  resetBtn.addEventListener('click', () => {
    numberInput.value = '';
    tableResult.innerHTML = '';
  });
});
