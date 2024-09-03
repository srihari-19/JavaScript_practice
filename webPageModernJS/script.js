import computer from './computer.js';
const laptop = new computer(
    "Lenova",
    "Intel Core i5",
    "16GB",
    "1TB",
    "Windows 11",
    true,
    "HD monitor",
    150,
    1500,
    'img/computerImg.jpg'
)

const content = `
<figure class="computer_img">
    <img src="${laptop.image}" width="300px" height="auto">
</figure>
<h1 class="computer_name">${laptop.name}</h1>
<ul class="computer_feature">
  <li class="feature processor">${laptop.processor}</li>
  <li class="feature ram">${laptop.ram}</li>
  <li class="feature storage">${laptop.storage}GB</li>
  <li class="feature window">${laptop.os}</li>
  <li class="feature wifi">${laptop.wifi ?"wifi available" : "wifi not available" }</li>
  <li class="feature display">${laptop.monitor}</li>
  <li class="feature wifispeed">${laptop.wifispeed.lowspeed}mbps</li>
  <li class="feature wifispeed5g">${laptop.wifispeed.highspeed}mbps</li>

</ul>
`

const main = document.querySelector("main");
const newArticle = document.createElement("article");
newArticle.classList.add("computer");
newArticle.setAttribute("id","laptop")
newArticle.innerHTML = content;
main.append(newArticle);

console.log(content);
if (laptop.wifi){
    console.log("wifi available")
}else{
    console.log("wifi not available")
}