function randomNumber (min, max){
    return  Math.round(Math.random() * (max - min +1) + min)
}
let num = randomNumber(1,100)
console.log(num)