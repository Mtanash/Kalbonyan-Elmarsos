let myBook = {
    title: "1984",
    author: "George Orwell",
    paperCount: 326
}

let otherBook = {
    title: "A peoples History",
    author: "Howard Zinn",
    paperCount: 723
}


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.paperCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary)
console.log(otherBookSummary)

// challenge area

let tempSummary = function (tempFahrenheit) {
    let tempCelsius = (tempFahrenheit - 32) * (5 / 9)
    let tempKelvin = (tempFahrenheit - 32) * (5 / 9) + 273.15

    return {
        Fahrenheit: tempFahrenheit,
        Celsius: tempCelsius,
        Kelvin: tempKelvin
    }
}

let tempSummary1 = tempSummary(32)
console.log(tempSummary1)
let tempSummary2 = tempSummary(54)
console.log(tempSummary2)
let tempSummary3 = tempSummary(70)
console.log(tempSummary3)