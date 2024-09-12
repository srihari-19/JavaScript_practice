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

let {firstName} = employee;

let{companyName:{nameC}}=employee;
console.log(firstName)
console.log(employee.firstName)
console.log(nameC)
