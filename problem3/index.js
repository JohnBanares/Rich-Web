// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => {
//         const part1 = data.map(user => user.login); 

//         console.log(part1);
//         const name = document.getElementById('info_name');
//         name.innerHTML = name.innerHTML +`&nbsp; &nbsp; ${part1[0]}`; 
//     });


const form_search = document.getElementById('form_search');
const username = document.getElementById('input_box');
const url = 'https://api.github.com/users';

const getData = (data,search_username) => {
    const part1 = data.map(user => user.login); 

    if(part1.includes(search_username))
    {
        console.log(search_username + 'exists');
        const name = document.getElementById('info_name');
        name.innerHTML = name.innerHTML +`&nbsp; &nbsp; ${search_username}`; 
    }
    else
    {
        console.log(search_username + 'does not exists')
    }
   
};


form_search.addEventListener('submit', (e)=>{
    e.preventDefault();

    const search_username = username.value;
    console.log(search_username);

    fetch(url)
    .then(response => response.json())
    .then(data=>getData(data, search_username));

        
})