// If Statements: used to check if statement is true or false
/*
let numb1 = 14
let numb2 = 7
if (numb1 > numb2) {
    console.log(`${numb1} is greater than ${numb2}`)
} 
else {
    console.log(`${numb1} is not greater than ${numb2}`)
}
*/

/*
 will display salary amount only as salary value is equal to itself. if the salary amount increased it will print both salary and bonus amount
let performance = true
let salary = 5000
let bonus = 500
if (salary > 5000) {
    console.log(`Your salary is R${salary + bonus}`)

} else {
    console.log(`Your salary is R${salary}`)
}
Converted into turnary operation
let salary = 8000
let bonus = 700
salary > 7000 ? console.log( `Your salary is R${salary + bonus}`) : console.log(`Your salary is R${salary}`)

*/

 /*if and else if statement
let performance = true
let salary = 5000
let bonus = 500
if (performance) {
    console.log(`Your salary is R${salary + bonus}`)
}  else if (salary > 5000) {
    console.log (`Your salary is R${salary + bonus}`)
} else {
    console.log(`Your salary is R${salary}`)
}
*/

// nested if statement
// let salary = 5000 
// let bonus = 500 
// let performance = true
// if (performance) {
//     if (salary >= 5000) {
//         console.log(`Your salary is R${salary + bonus}`);
//     } else {
//         console.log(`Your salary is R${salary}`);
//     }
// } else {
//     console.log('You didn\'t perform well');
// }
//my example
// let salary = 6000
// let bonus = 1000
// let performance = true
// if (performance) {
//     if (performance) {
//      
//         console.log(`You have performed well this month. Here is your salary R${salary + bonus}`);
    
//     } else if(salary > 7000) {
//         console.log(`Here is your salary R${salary + bonus}`)
//     } 
// } else {
//     console.log(`You did not perform`)
// }


//Switch statement (alt to if statement)
// switch (salary) {
//     case 5000:
//         console.log(`Salary is R${salary}`);
//         break
//     case 7000:
//         console.log(`Salary is R${salary}`);
//         break
//     default:
//         console.log(`This ${salary} was not included in one of the case`);
//     break
// }

/*
let mark = 89

switch (true) {
    case (mark == 100):
        console.log('A')
        break
    case (mark >= 90) && (mark <= 99):
        console.log('B')
        break
    case (mark >= 80) && (mark <= 89):
        console.log('C')
        break
    case (mark >= 75) && (mark <= 79):
        console.log('D')
        break
    case (mark >= 70) && (mark <= 74):
        console.log('E')
        break
    case (mark >= 50) && (mark <= 69):
        console.log('Pass')
        break
    case (mark <= 49):
        console.log('Fail')
        break
}
*/

 //Solution (Joel)

let marks = 100
let grade = " "
switch (true) {
    case marks == 100:
    grade = "A"
    break
case marks >= 90:
    grade  = "B"
    break
case marks >= 80:
    grade = "C"
    break
case marks >= 75:
    grade = "D"
    break
case marks >= 70:
    grade = "E"
    break
case (marks >= 50) && (marks <= 69):
    grade = "Passed"
    break
case marks <= 49:
    grade = "Fail"
    break
default:
    grade = "Invalid" 
}

console.log(`${grade} ${marks}`)