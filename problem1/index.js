const searchBox = document.getElementById('searchBox');
const table = document.getElementById('resultList');
const rows = document.getElementsByTagName('tr');

searchBox.addEventListener('input', function() {
    const searchText = searchBox.value.toLowerCase();
    filterItems(searchText);
});

function filterItems(searchText) {
    Array.from(rows).forEach(function(row, index) {
        if (index !== 0) { 
            const text = row.textContent.toLowerCase();
            if (text.includes(searchText)) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        }
    });
}



