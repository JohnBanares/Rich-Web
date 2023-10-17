const searchBox = document.getElementById('searchBox');
const table = document.getElementById('resultList');
const rows = document.getElementsByTagName('tr');
const warning = document.getElementById("noResult")

searchBox.addEventListener('input', function() {
    const searchText = searchBox.value.toLowerCase();
    filterItems(searchText);
});



function filterItems(searchText) {
    let result = false;

    for (const row of rows) {
        if (row.rowIndex !== 0) {
            const td = row.getElementsByTagName("td")[1]; 
            const text = td.textContent.toLowerCase();
            if (text.includes(searchText)) {
                row.style.display = 'table-row';
                result = true;
            } else {
                row.style.display = 'none';
                result = false
            }
        }
    }

    if(result == false){
        warning.style.visibility = 'visible';
    }
    else{
        warning.style.visibility = 'hidden';
    }
}

