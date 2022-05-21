let person = {
    name: 'Boris',
    age: 29,
    isProgrammer: true,
    languages:['UK','EN','RU'],
    greet(){
        console.log(`Hellow mr.${person.name}`);
    },
}
for (let key in person) {
    if(person[key] === 29){
        console.log(key + ' ' + person[key])
        console.log(person.greet())
    }
}