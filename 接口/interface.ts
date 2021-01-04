interface Person {
    name:string,
    age:number
}
function geters(person:Person){
    let newPerson=person.name+':'+person.age
    console.log(newPerson)
}
geters({name:'赵田孙李',age:20})