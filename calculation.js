/* letar efter  ID:et, en eventlistner som lyssnar  till submit händelsen. sen körs funktionen */
document.getElementById('area-form').addEventListener('submit', function(event) {
    /* gör webbläsaren ändrar sitt standar beteende */
    event.preventDefault();

    /* här hämtas värdet från input med ID:et area, får ett värde när användaren fyller i kvm*/
    let area = document.getElementById('area').value;
    /* när användaren markerad en radio button så finns ett value */
    let selectedPriceOption = document.querySelector('input[name="priceOption"]:checked').value;

    /* Här räknas det ut vad användare matade in och och vilket prisalternativ den valde i radio button */
    let totalPrice = area * selectedPriceOption;

    /* visar total priset i form av text på hemsidan */
    document.getElementById('result').textContent = 'Totalt pris: ' + totalPrice + ' kr';
});