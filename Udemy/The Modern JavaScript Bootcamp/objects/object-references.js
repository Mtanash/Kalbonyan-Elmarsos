let myAccount = {
    name: "Mohamed Tanash",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount
}

// add income
let addIncome = function(account, amount) {
    account.income += amount
}

// reset account

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

// account summary
let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income, $${account.expenses} in expenses.`
}

// add income
// add expense
// add another expense
// get account summary
// reset account
// get account summary

addIncome(myAccount, 2000)
addExpense(myAccount, 240)
addExpense(myAccount, 50)
let accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)
resetAccount(myAccount)
accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)