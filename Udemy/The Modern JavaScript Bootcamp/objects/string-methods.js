let myName = "  Mohamed Tanash  "

console.log(myName.length)

console.log(myName.toUpperCase())

console.log(myName.toLowerCase())


let password = "abc123password456"
console.log(password.includes("password"))


console.log(myName.trim())

// challenge area

let validPassword = function(password ) {
    return password.length > 8 && !password.includes("password")
}

console.log(validPassword("abc123password456"))
console.log(validPassword("abc123456"))
console.log(validPassword("abc1"))