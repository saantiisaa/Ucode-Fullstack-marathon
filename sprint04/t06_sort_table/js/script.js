const superheroes = [
    { superhero: 'Black Panther', strength: 66, age: 53 },
    { superhero: 'Captain America', strength: 79, age: 137 },
    { superhero: 'Captain Marvel', strength: 97, age: 26 },
    { superhero: 'Hulk', strength: 80, age: 49 },
    { superhero: 'Iron Man', strength: 88, age: 48 },
    { superhero: 'Spider-Man', strength: 78, age: 16 },
    { superhero: 'Thanos', strength: 99, age: 1000 },
    { superhero: 'Thor', strength: 95, age: 1000 },
    { superhero: 'Yon-Rogg', strength: 73, age: 52 },
];

let currentColumn = -1;
let sortAscending = true;
function createTable() {
    const table = document.createElement('table');
    table.id = 'superhero-table';

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headers = ['Superhero', 'Strength', 'Age'];
    const headerRow = document.createElement('tr');

    headers.forEach((header, index) => {
        const th = document.createElement('th');
        th.textContent = header;
        th.addEventListener('click', () => sortTable(index));
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    superheroes.forEach((hero) => {
        const row = document.createElement('tr');
        for (const key in hero) {
            const cell = document.createElement('td');
            cell.textContent = hero[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    return table;
}

function sortTable(column) {
    const table = document.getElementById('superhero-table');
    const headerRow = table.getElementsByTagName('thead')[0].rows[0];
    const header = headerRow.cells[column];
    const sortIndicators = headerRow.getElementsByClassName('sort-indicator');
    Array.from(sortIndicators).forEach((indicator) => {
        indicator.parentNode.removeChild(indicator);
    });
    if (currentColumn === column) {
        sortAscending = !sortAscending;
    } else {
        currentColumn = column;
        sortAscending = true;
    }

    const sortOrder = sortAscending ? 'ASC' : 'DESC';
    const sortIndicator = document.createElement('span');
    sortIndicator.classList.add('sort-indicator');
    header.appendChild(sortIndicator);
    updateTable(table);
    showNotification(`Sorting by ${header.textContent}, order: ${sortOrder}`);
}

function updateTable(table) {
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName('tr'));

    rows.sort((a, b) => {
        const aValue = a.cells[currentColumn].textContent;
        const bValue = b.cells[currentColumn].textContent;
        if (currentColumn === 0) {
            if (sortAscending) {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        } else {
            const numericComparison = sortAscending
                ? parseFloat(aValue) - parseFloat(bValue)
                : parseFloat(bValue) - parseFloat(aValue);

            if (!isNaN(numericComparison)) {
                return numericComparison;
            } else {
                return aValue.localeCompare(bValue);
            }
        }
    });

    rows.forEach((row) => tbody.appendChild(row));
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
}

const placeholder = document.getElementById('placeholder');
const table = createTable();
placeholder.innerHTML = '';
placeholder.appendChild(table);