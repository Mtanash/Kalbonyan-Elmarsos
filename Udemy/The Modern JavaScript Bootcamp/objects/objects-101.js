let myBook = {
    title: "1984",
    author: "George Orwell",
    paperCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)


myBook.title = "Animal Farm"
console.log(`${myBook.title} by ${myBook.author}`)

// challenge area

let person = {
    name: "Mohamed",
    age: 25,
    location: "Damietta, Egypt"
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}!`) 

person.age += 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}!`) 