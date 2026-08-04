const order = {
  id: 101,
  item: "Laptop",
  price: 85000,
  buyer: { name: "Ali", city: "Lahore" },
};

const {id,item,price,buyer:{name}} = order;
console.log(`Order #${id}: ${name} ne ${item} khareeda (Rs. ${price})`)