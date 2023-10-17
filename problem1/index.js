window.addEventListener('load', ()=> {
    const form_phone = document.getElementById('form-phone');
    const contact = document.getElementById('contact');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    const searchBox = document.getElementById('searchBox');
    const table = document.getElementById('resultList');
    const rows = document.getElementsByTagName('tr');
    const warning = document.getElementById("noResult");
    const error_form = document.getElementById('error');
    const errorInner = error_form.querySelector('p');


    form_phone.addEventListener('submit', (e)=>{
        e.preventDefault();
    
        const add_contact = contact.value;
        const add_mobile = mobile.value;
        const add_email = email.value;
        // console.log(add_contact);
        // console.log(add_contact.length);
        // console.log(add_mobile);
        // console.log(add_email);

        // check input for empty fields
        if(add_contact.length == 0 || add_mobile.length == 0 || add_email.length == 0){
            error_form.style.display = 'block';
            errorInner.innerHTML = 'Error: fields must not be empty';
            return;
        }//check name input for non characters
        else if (!/[a-zA-Z]/.test(add_contact))
         {
            error_form.style.display = 'block';
            errorInner.innerHTML = 'Error: Name must only contain alphabet characters';
            return;
        }//check name input for name length greater than 20
        else if(add_contact.length >20)
        {
            error_form.style.display = 'block';
            errorInner.innerHTML = 'Error: Name must be less than 20';
            return;
        }//check mobile input for non numeric values
        else if(!/[0-9]/.test(add_mobile))
        {
            error_form.style.display = 'block';
            errorInner.innerHTML = 'Error: Mobile must be numbers only';
            return;
        }//check mobile input for length greater than 10
        else if(add_mobile.length > 10)
        {
            error_form.style.display = 'block';
            errorInner.innerHTML = 'Error: Mobile must be less than 10';
            return;
        }//check email input greater than 40
        else if(add_email.length > 40)
        {
            error_form.style.display = 'block';
            errorInner.innerHTML = 'Error: Email must be less than 40';
            return;
        }//reset error back to none display
        else{
            error_form.style.display = 'none';
        }

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

        contact.value='';
        mobile.value='';
        email.value='';
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

  //     for (i = 0; i < tr.length; i++) {
    //         td = tr[i].getElementsByTagName("td")[1];
    //         if (td) 
    //         {
    //         const txtValue = td.textContent.toLowerCase();
    //             if (txtValue.includes(searchText)) 
    //             {
    //                 tr[i].style.display = "";
    //             } 
    //             else 
    //             {
    //                 tr[i].style.display = "none";
    //             }
    //         }    
    //     }
    
    // }
// function filterItems(searchText) {
//     Array.from(rows).forEach(function(row, index) {
//         if (index !== 0) { 
//             const text = row.textContent.toLowerCase();
//             if (text.includes(searchText)) {
//                 row.style.display = 'table-row';
//             } else {
//                 row.style.display = 'none';
//             }
//         }
//     });
// }

// function filterItems(searchText) {
//     //     // for (const row of rows) {
//     //     //     if (row.rowIndex !== 0) {
//     //     //         const text = row.textContent.toLowerCase();
//     //     //         if (text.includes(searchText)) {
//     //     //             row.style.display = 'table-row';
//     //     //         } else {
//     //     //             row.style.display = 'none';
//     //     //         }
//     //     //     }
//     //     // }