document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');

    form.onsubmit = function (e) {
        e.preventDefault();

        alert('MEJLET HAR DRAGITS IVÄG KISEN!');
    };
});