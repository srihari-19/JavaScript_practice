// object destruture
let employee ={
    companyName:{
        nameC:'zzz'
    },
    firstName:"john",
    lastName:"pandiyan",
    age:55,
    healthcondition:"good"
};

// let {firstName} = employee;

// let{companyName:{nameC}}=employee;
// console.log(firstName)
// console.log(employee.firstName)
// console.log(nameC)


function printName({firstName, age}) {
    console.log(firstName+ "-" +age)
}
printName(employee)

// array and object de structure new one
function calculate(a,b){
    let add = a+b;
    let sub = a-b;
    let mult = a*b;
    return[add,sub,mult]
}

let final = calculate(10,10)

