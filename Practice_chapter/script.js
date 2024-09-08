function isEven(userInput, numUser){
    let count = 0;
    for (let index = 0; index < userInput.length; index++) {
      if (userInput[index]===numUser){
        count++
      }
        
    }
    return count

}

userValue = isEven("hello", "h");
console.log(userValue)