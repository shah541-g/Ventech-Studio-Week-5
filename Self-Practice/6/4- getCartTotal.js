
const getCartTotal = (cart) => {
  return cart.reduce((sum,element) => sum+element.price,0)
}


const cart = [
  {
    id: 1,
    name: "USB-C Cable",
    category: "Accessories",
    price: 500,
    quantity: 2,
    inStock: true
  },
  {
    id: 2,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 2500,
    quantity: 1,
    inStock: true
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 8500,
    quantity: 1,
    inStock: true
  },
  {
    id: 4,
    name: "Laptop Stand",
    category: "Accessories",
    price: 1800,
    quantity: 1,
    inStock: false
  },
  {
    id: 5,
    name: "Monitor",
    category: "Electronics",
    price: 32000,
    quantity: 1,
    inStock: true
  },
  {
    id: 6,
    name: "Notebook",
    category: "Stationery",
    price: 350,
    quantity: 5,
    inStock: true
  }
];

console.log(getCartTotal(cart))