fetch('https://api.nbp.pl/api/exchangerates/tables/A/?format=json')

.then(response => response.json())

.then(data => {
    const rates = data[0].rates;
    const tbody = document.querySelector('#currencyTable tbody');

    rates.forEach(rate => {

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${rate.currency}</td>  <!-- nazwa waluty -->
            <td>${rate.code}</td>      <!-- kod waluty, np. USD -->
            <td>${rate.mid}</td>       <!-- kurs w PLN -->
        `;

        tbody.appendChild(row);
    });
})

.catch(() => alert('Nie udało się pobrać danych z NBP.'));
