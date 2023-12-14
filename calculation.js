document.getElementById('area-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let area = document.getElementById('area').value;
    let selectedPriceOption = document.querySelector('input[name="priceOption"]:checked').value;
    let totalPrice = area * selectedPriceOption;

    document.getElementById('result').textContent = 'Totalt pris: ' + totalPrice + ' kr';
});