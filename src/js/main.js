import "../scss/style.scss";

fetch('https://api.nbp.pl/api/exchangerates/tables/A/?format=json')
.then(response => response.json())
.then(data => {
    const rates = data[0].rates;
    const tbody = document.querySelector('#currencyTable tbody');
    
    // Tworzymy fragment dokumentu 
    const fragment = document.createDocumentFragment();

    rates.forEach(rate => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rate.currency}</td>
            <td>${rate.code}</td>
            <td>${rate.mid}</td>
        `;
        fragment.appendChild(row);
    });

    // Wstawiamy wszystko za jednym razem
    tbody.appendChild(fragment);
})
.catch(() => console.error('Błąd pobierania danych.'));