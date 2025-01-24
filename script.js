const bill = document.getElementById('bill');

bill.addEventListener('input', function handleChange(event) {
  console.log(event.target.value);
});