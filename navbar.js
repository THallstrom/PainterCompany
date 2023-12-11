// common.js
// Funktion för att hämta och inkludera navigationsmenyn
function includeNavbar() {
    // Skapa en ny XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Ange metod, URL och async-parameter
    xhr.open('GET', '/html/navbar.html', true);

    // Ange en callback-funktion för när förfrågan är klar
    xhr.onload = function () {
        // Om förfrågan är lyckad, lägg till navigationsmenyn till <body>
        if (xhr.status >= 200 && xhr.status < 300) {
            document.body.insertAdjacentHTML('afterbegin', xhr.responseText);
        }
    };

    // Skicka förfrågan
    xhr.send();
}

// Anropa funktionen för att inkludera navigationsmenyn
includeNavbar();
