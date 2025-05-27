document.getElementById('bmi-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
   if (height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    const resultText = interpretBMI(bmi);
    document.getElementById('result').innerHTML = `
      <p>Your BMI is <strong>${bmi.toFixed(2)}</strong></p>
      <p>${resultText}</p>
    `;
  } else {
    document.getElementById('result').innerHTML = '<p>Please enter valid height and weight.</p>';
  }
});
function interpretBMI(bmi) {
  if (bmi < 18.5) return 'Underweight 😕';
  else if (bmi < 24.9) return 'Normal weight 👍';
  else if (bmi < 29.9) return 'Overweight ⚠';
  else return 'Obesity 🚨';
}
