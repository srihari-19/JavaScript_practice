import Computer from "./Computer.js";

const laptop = new Computer(
    "HP",
    "AMD",
    16,
    512,
    "Windows 11",
    true,
    "True HD",
    150,
    1500
)


console.log("The HP Laptop: ",laptop);
console.log("The os it comes with: ",laptop.os)