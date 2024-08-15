// function declaration
// function declaration (a, b){
//     let c = a + b;
//     return c;
// }

// Function expression

// const doMulti = function (a,b){
//     let c = a*b;
//     return c;
// }

// console.log("date from funstion declaration: ", declaration(25,26));
// console.log("date from funstion Expresion: ", doMulti(25,26));

// Immediatly invoke function
// (function (){
//     let a = 5;
//     let v = 6;
//     let c = declaration(a,v);
//     console.log(`this is the invoke functio ${c}`)
// })()

// create element by using js

const hpLaptop = {
    name: "HP",
    colour: 'black',
    storage: "512gb",
    ram: "8gb"
}

const addLaptop = function(currentLap){
    let newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h1>${currentLap.name}</h1>
        <p>Detail are the laptop</p>
        <ul>
            <li>${currentLap.colour}</li>
            <li>${currentLap.storage}</li>
            <li>${currentLap.ram}</li>
        </ul>
    `;
    return newArticle;
}
const theArticle = addLaptop(hpLaptop);
// console.log(theArticle)
let main = document.querySelector("main");
main.append(addLaptop(hpLaptop))