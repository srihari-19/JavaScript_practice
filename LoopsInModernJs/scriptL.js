// Type of computer
const computers = ['Desktop', 'Laptop', 'Tablet', 'smartphone' ];

// create element
const maintag = document.querySelector('main');
let createUnorder =  document.createElement("ul");

// For Loop apply
for(let i=0; i < computers.length; i++){
    let listItem = document.createElement("li");
    listItem.innerHTML = computers[i];
    createUnorder.append(listItem);
}
// Append list
maintag.append(createUnorder);