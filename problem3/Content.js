//array of images
let webImages = [
    "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    "https://www.bairesdev.com/wp-content/uploads//2022/06/Picture6-1.svg",
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EVqCcmCPgpNKxU1wzcTHgw.png",
    "https://material.angularjs.org/latest/img/logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png",
    "https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/images/optimized/rev-611dbe7/litslink.com/wp-content/uploads/2020/12/node.js-logo-image-2048x1170.png"
];



document.body.style.backgroundColor = 'DarkCyan';

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * webImages.length)
    imgs[i].src = webImages[randomImg]
}
//do the same for h elements
const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Looking for information about rich web.";
    headers[i].style.border = "10px dotted #008B8B"; 
    headers[i].style.color = "#008B8B"; 
    headers[i].style.fontFamily = "Comic Sans MS";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is should be about rich web applications.";
    p[i].style.color="red";
    p[i].style.border = "10px solid red"; 
    p[i].style.fontFamily = "Comic Sans MS";
}

//using keywords replace the innertext of all links and span tags not relating to web 
const swap = document.querySelectorAll('a, span');
for(let i =0; i < swap.length; i++){
    if(!/web|react|jQuery|css|html|javascript|angular|.js|php|typescript|json|node|express|wordpress|laravel|svg|bootstrap/i.test(swap[i].innerHTML))
    {
        swap[i].innerHTML ="Not related to web";
    }
}
    

