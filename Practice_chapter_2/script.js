// let createlist1 = `
//     <li>Name</li>
//     <li>Number</li>
//     <li>Address</li>
//     <li>State</li>
//     <li>Distric</li>
//     <li>Pincode</li>
//     <button class="touch-btn">click</button>
// `;
// let mainMenu = document.querySelector("main");
// mainMenu.classList.add("mai-menu")
// let uList =document.createElement("ul");
// uList.classList.add("ul-class")
// uList.innerHTML = createlist1;

// mainMenu.append(uList);



// let changeBtn = document.querySelector(".touch-btn");
// changeBtn.addEventListener("click", (event)=>{
//     console.log(event)
//         // Toggle the background color (add/remove)
//         if (uList.style.backgroundColor === "yellow") {
//             uList.style.backgroundColor = "";  // Removes the background color
//             console.log('Background color removed');
//         } else {
//             uList.style.backgroundColor = "yellow";  // Adds the background color
//             console.log('Background color set to yellow');
//         }
// })


// class get and set
class Employee{
    name1 = "kavin"
    set employeeName(name){
        console.log(this.employeeName1 = name)
    }
    
    get employeerName(){
        return this.name1;
    }
}

let employee = new Employee()
employee.employeeName = "ram"
employee.employeerName = "kbd"
console.log(employee.employeerName)


