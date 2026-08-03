
const filterInStock = (products) => {
  return products.filter(product => product.inStock===true)
}

const products =  [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 2500,
    inStock: true
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 8500,
    inStock: false
  },
  {
    id: 3,
    name: "27-inch Monitor",
    price: 32000,
    inStock: true
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 4500,
    inStock: true
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 1800,
    inStock: false
  },
  {
    id: 6,
    name: "External SSD 1TB",
    price: 19500,
    inStock: true
  },
  {
    id: 7,
    name: "Webcam",
    price: 6200,
    inStock: false
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 7800,
    inStock: true
  }
];

console.log(filterInStock(products))