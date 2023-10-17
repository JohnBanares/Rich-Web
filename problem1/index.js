window.addEventListener('load', ()=> {
    const form_phone = document.getElementById('form-phone');
    const contact = document.getElementById('contact');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    const searchBox = document.getElementById('searchBox');
    const table = document.getElementById('resultList');
    const rows = document.getElementsByTagName('tr');
    const warning = document.getElementById("noResult")

    form_phone.addEventListener('submit', (e)=>{
        e.preventDefault();
    
        const add_contact = contact.value;
        const add_mobile = mobile.value;
        const add_email = email.value;
        console.log(add_contact);
        console.log(add_mobile);
        console.log(add_email);

        const new_row = document.createElement('tr');

        const new_row_name = document.createElement('td');
        new_row_name.innerHTML = add_contact;
        new_row.appendChild(new_row_name);

        const new_row_mobile = document.createElement('td');
        new_row_mobile.innerHTML = add_mobile;
        new_row.appendChild(new_row_mobile);

        const new_row_email = document.createElement('td');
        new_row_email.innerHTML = add_email;
        new_row.appendChild(new_row_email);

        table.appendChild(new_row);
    })

    searchBox.addEventListener('input', function() {
        const searchText = searchBox.value.toLowerCase();
        filterItems(searchText);
    });



    function filterItems(searchText) {
        let result = false;

        for (const row of rows) {
            if (row.rowIndex !== 0) {
                const td = row.getElementsByTagName('td')[1]; 
                const text = td.textContent.toLowerCase();
                if (text.includes(searchText)) {
                    row.style.display = 'table-row';
                    result = true;
                } else {
                    row.style.display = 'none';
                }
            }
        }

        if(result == false){
            warning.style.display = 'block';
        }
        else{
            warning.style.display = 'none';
        }
    }
});

 