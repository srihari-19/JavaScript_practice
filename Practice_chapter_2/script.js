// object destruture
let employee = {
    companyName: {
        nameC: 'zzz',
        YearOfStart:2020
    },
    firstName: "john",
    lastName: "pandiyan",
    age: 55,
    healthcondition: "good"
};

// for Deep and shallow copy
 let forCopy = JSON.parse(JSON.stringify(employee));
 employee.firstName = "Pandiyan";
 console.log(employee);
 console.log(forCopy);











