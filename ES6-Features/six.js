let numbers=[1,2,3,4,5,6,7,8,9,10]
//create and print - new even number array
//let even_numbers=[]

let even_numbers=numbers.map((number)=>{
    return number%2 === 0
})

console.log(numbers)
console.log(even_numbers)

