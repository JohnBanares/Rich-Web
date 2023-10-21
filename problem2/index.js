fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const part1 = data
            .map(data => data.title)
            .filter(title => title.split(' ').length > 6); 

        

        console.log(part1);
    })
