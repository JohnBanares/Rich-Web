const form_search = document.getElementById('form_search');
const username = document.getElementById('input_box');
const info_name = document.getElementById('info_name');
const info_username = document.getElementById('info_username');
const info_email = document.getElementById('info_email');
const info_location = document.getElementById('info_location');
const info_pfp = document.getElementById('info_pfp');
const info_gists = document.getElementById('info_gists');

const url = 'https://api.github.com/users';

const getData = (data,search_username) => {
    const login = data.login; 
    // console.log(data.public_gists);
    if(login === search_username)
    {
        // console.log(search_username + 'exists');
        info_pfp.style.visibility ='visible';
        info_pfp.src = data.avatar_url;
        info_name.innerHTML = info_name.innerHTML.slice(0,5) +`&nbsp; &nbsp; ${data.name}`; 
        info_username.innerHTML = info_username.innerHTML.slice(0,9) +`&nbsp; &nbsp; ${login}`; 
        info_email.innerHTML = info_email.innerHTML.slice(0,6) +`&nbsp; &nbsp; ${data.email}`; 
        info_location.innerHTML = info_location.innerHTML.slice(0,9) +`&nbsp; &nbsp; ${data.location}`; 
        info_gists.innerHTML = info_gists.innerHTML.slice(0,16) +`&nbsp; &nbsp; ${data.public_gists}`; 
    }
    else
    {
        info_pfp.style.visibility ='hidden';
        info_name.innerHTML = 'Name';
        info_username.innerHTML = 'Username:';
        info_email.innerHTML = 'Email';
        info_location.innerHTML = 'Location:';
        info_gists.innerHTML = 'Number of gists:';
        // console.log(search_username + 'does not exists');
    }
   
};
const getRepo = (search_username) => {
    console.log('looking for ' + search_username + ' repos');
};

form_search.addEventListener('submit', (e)=>{
    e.preventDefault();

    const search_username = username.value;
    const new_url = url.concat('/',search_username);
    // console.log(url.concat('/',search_username));

    fetch(new_url)
    .then(response => {
        if(!response.ok)
        {
            console.log("error");
        }
        else{
            return response.json();
        }
    })
    .then(data=>{
        getData(data, search_username);
        getRepo(search_username);
    });

    username.value='';        
})