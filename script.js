document.getElementById('bmi-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
