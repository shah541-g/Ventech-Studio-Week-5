const cart = [
  { name: 'Cable', length: '5m', price: 500 },
  { name: 'Cable', length: '5m', price: 500 },
  { name: 'Cable', length: '5m', price: 500 }
]
const TAXRATE = 0.17
let subTotal = cart.reduce((sum,x) => sum + x.price,0)



const Tax = subTotal * TAXRATE
let cartTotal = 0
cartTotal=Tax + subTotal
console.log(cartTotal)