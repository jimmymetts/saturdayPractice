// console.log("test")

for (let currentNumber = 1; currentNumber <= 50; currentNumber++) {

    
    if (currentNumber % 4 === 0 && currentNumber % 9 === 0) {
         console.log("Taco Tuesdays") 
     }
     else if (currentNumber % 4 === 0) {
        console.log("Taco")
     }
     else if (currentNumber % 9 === 0) {
        console.log("Tuesdays") 
    }
    else if (currentNumber % 1 === 0) {
        console.log(currentNumber)
    }

}
