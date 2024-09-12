// object destruture
let employee = {
    companyName: {
        nameC: 'zzz'
    },
    firstName: "john",
    lastName: "pandiyan",
    age: 55,
    healthcondition: "good"
};

// let {firstName} = employee;

// let{companyName:{nameC}}=employee;
// console.log(firstName)
// console.log(employee.firstName)
// console.log(nameC)


function printName({ firstName, age }) {
    console.log(firstName + "-" + age)
}
printName(employee)

// array and object de structure new one
function calculate(a, b) {
    let add = a + b;
    let sub = a - b;
    let mult = a * b;
    return [add, sub, mult]
}

let final = calculate(10, 10)

//array & object destructure
const numOfEmployee = {
    company1: ['sam', 'ram', 'wan'],
    company2: ['sela', 'mala', 'buula']
}

let { company1: [lada], company2: [, , jimm] } = numOfEmployee
console.log(lada)
console.log(jimm)


// for array
const trail = [
    { name1: "don", age1: 15 },
    { name2: "won", age2: 25 },
]

let [{age1:ring}] = trail;
console.log(ring)

let array111= ['hai','hello','bye'];
console.log(...array111)
function namePrint(ha){
    console.log(ha)
}
let bvb = [1,2,3,4]
let vbv = [11,22,33,44]

printEmpoyee ={...employee}
namePrint(printEmpoyee)
console.log("normalprint",printEmpoyee)
let mixArray = [...bvb,...vbv]
console.log(mixArray)
