let prices =[98,198,298,398]
//create new prices by adding + 1

//Expeted output:   [99,199,299,399]

let new_prices=[]

/*for(let i=0;i<prices.length-1;i++){
    console.log(prices[i]-1)
    new_prices.push(prices[i]+1)
}
console.log(new_prices)*/

for(price of prices){
new_prices.push(price+1)
}
console.log(prices)
console.log((new_prices))
