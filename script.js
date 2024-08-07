// let computer = ["Desktop", "Laptop", "Tablet"];
// console.log(computer.join(" | "))
// computer.push("phone", 55);
// computer.unshift("hai ", 45)
// console.log(computer)

let computers = ["Desktop", "Laptop", "Tablet PC"];

computers.forEach(function(item){
    item = `<li>${item}</li>`
    console.log(item)
})
console.log(computers)