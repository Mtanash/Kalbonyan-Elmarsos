let num = 164.655

console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 10
let max = 20
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)

// challenge area

let makeGuess = function (num) {
    let max = 5
    let min = 1
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber === num
}

console.log(makeGuess(1))
