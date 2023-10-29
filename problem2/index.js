fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const part1 = data
            .map(data => data.title)
            .filter(title => title.split(' ').length > 6); 
        console.log(part1);

        //get data body content
        const getBody = data.map(data => data.body);
        //this is getting the body content and spliting the array into individual words including spaces ane new lines
        const trimBody = getBody
        .map(body => body.split(/\s+/));

        //merge subarrays into one array
        const flatBody = trimBody.flat();

        //iterate over each element of flatBody and update value of countWord
        const countBody= flatBody.reduce((countWord, word) => {
            //empty countWord stores the count of each word
            if (word in countWord) {
                countWord[word] += 1;
            } else {
                countWord[word] = 1; 
            }
            return countWord;
        },{})

        // console.log(getBody);
        // console.log(trimBody);
        // console.log(flatBody);
        console.log(countBody);
    })





