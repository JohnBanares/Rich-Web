const form_search = document.getElementById('form_search');
const username = document.getElementById('input_box');
const info_name = document.getElementById('info_name');
const info_username = document.getElementById('info_username');
const info_email = document.getElementById('info_email');
const info_location = document.getElementById('info_location');
const info_pfp = document.getElementById('info_pfp');
const info_gists = document.getElementById('info_gists');
const repo_list = document.getElementById('outer');
const url = 'https://api.github.com/users';

const getData = (data,search_username) => {
    const login = data.login; 
    // console.log(data.public_gists);

    //check if the user exists in the on 
    if(login === search_username)
    {
        // console.log(search_username + 'exists');
        //insert data from response into inner html tags of the user profile container
        info_pfp.style.visibility ='visible';
        info_pfp.src = data.avatar_url;
        info_name.innerHTML = info_name.innerHTML.slice(0,5) +`&nbsp; &nbsp; ${data.name}`; 
        info_username.innerHTML = info_username.innerHTML.slice(0,9) +`&nbsp; &nbsp; ${login}`; 
        info_email.innerHTML = info_email.innerHTML.slice(0,6) +`&nbsp; &nbsp; ${data.email}`; 
        info_location.innerHTML = info_location.innerHTML.slice(0,9) +`&nbsp; &nbsp; ${data.location}`; 
        info_gists.innerHTML = info_gists.innerHTML.slice(0,16) +`&nbsp; &nbsp; ${data.public_gists}`; 
        
        //This function creates the divs for each repo with its description for that specific user
        getRepo(search_username);
    }
    else
    {
        //if user does not exist then remove all repo divs created from different searchs
        repo_list.innerHTML ='';
        info_pfp.style.visibility ='hidden';
        info_name.innerHTML = 'Name: User does not exist';
        info_username.innerHTML = 'Username:';
        info_email.innerHTML = 'Email:';
        info_location.innerHTML = 'Location:';
        info_gists.innerHTML = 'Number of gists:';
        // console.log(search_username + 'does not exists');
    }
   
};
const getRepo = (search_username) => {
    // console.log(`https://api.github.com/users/${search_username}/repos`);

    //after every getRepo call clear all previous divs added before
    repo_list.innerHTML ='';

    fetch(`https://api.github.com/users/${search_username}/repos`)
    .then(response => {
        if(!response.ok)
        {
            console.log("error");
        }
        else{
            return response.json();
        }
    })
    .then(user_repo=>{

        //handles the data from the json returned from the api and get the user's repo with its decription
        const repo_name = user_repo.map(user_repo=>user_repo.name);
        const repo_desc = user_repo.map(user_repo=>user_repo.description);
        console.log(repo_name);
        console.log(repo_desc);

        //loop through all repositories and create each individual containaer to hold the repo name and description
        //up untill the length of all user's repo
        for(i =0; i<=repo_name.length;i++)
        {
            const new_container = document.createElement('div');
            new_container.classList.add('container');

            const new_name = document.createElement('p');
            new_name.innerHTML = 'Name: ' + repo_name[i];
            new_container.appendChild(new_name);

            const new_desc = document.createElement('p');
            new_desc.innerHTML = 'Description: ' + repo_desc[i];
            new_container.appendChild(new_desc);

            repo_list.appendChild(new_container);

        }
    });
};

form_search.addEventListener('submit', (e)=>{
    e.preventDefault();

    const search_username = username.value;
    const new_url = url.concat('/',search_username);
    // console.log(url.concat('/',search_username));
    
    //after user searches a user name call the api
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
        //after response from the api pass that data alongside the username searched into getData()
        getData(data, search_username)
        // getRepo(search_username);

    });

    username.value='';        
})