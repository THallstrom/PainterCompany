document.getElementById('area-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let area = document.getElementById('area').value;
    let selectedPricePerSquareMeter = document.querySelector('input[name="priceOption"]:checked').value;
    let totalPrice = area * selectedPricePerSquareMeter;

    document.getElementById('result').textContent = 'Totalt pris: ' + totalPrice + ' kr';
});