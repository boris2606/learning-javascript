// let cars = ['Honda','BMW','Nissan']
// let numbers = [1,2,3,5,7,10,15,20]
// let filtredNumbers = numbers.filter( num => num > 10 )
// console.log(filtredNumbers)
// console.log(numbers)
// let upperCase = cars.map( car => car.toUpperCase() )
// console.log(upperCase)
// // let newCar = cars.indexOf('BMW')
// // cars[newCar] = 'Opel'
// // console.log(cars)

let people = [
    {name: 'Elena', budget: 3900},
    {name: 'Boris', budget: 4600},
    {name: 'Victoria', budget: 2800}
]

let allBudget = people.filter( person => person.budget > 3000).reduce( (acc,person) => {
    acc += person.budget
    return acc
}, 0 )
console.log(allBudget)

// // let person = people.find(function(person){
// //     return person.budget === 2800
// // })

// let person = people.find(person => person.budget === 4600)
// console.log(person)