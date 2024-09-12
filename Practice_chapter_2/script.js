// spread rest parameter
let firstArray=["hai", "hello", "bye"];
let secondArray = ["ram","tom","sam"];

// let arrayMerg = firstArray.concat(secondArray);
nameArray = [...firstArray,...secondArray]
// console.log(nameArray);

// for object
let areaOnePerson = {
    name1 : 'ram',
    age1: 26,
    gender1:"male"
}

let areaTwoPerson = {
    name : 'sam',
    age: 22,
    gender:"male"
}
const mergePerson ={
    ...areaOnePerson,
    ...areaTwoPerson
}
// console.log(mergePerson)
// useing strings 
let studentName = "jimjam";
let ans = [...studentName];
// console.log(ans);


// rest parameter

const input = [1,2,3,4,5,6,7] 

function findValue(...vvv){
    let answer = 0;
    for(let i=0;i<vvv.length;i++){
        answer = answer + vvv[i]
   
    }
    console.log(answer)
}
findValue(...input)