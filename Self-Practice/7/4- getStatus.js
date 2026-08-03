
const getStatus = (order) => {
  const {status} = order;
  return status;
}


const order = {
  orderId: "ORD-2026-001",
  customerName: "Ali Khan",
  items: [
    {
      id: 1,
      name: "Wireless Mouse",
      quantity: 2,
      price: 2500
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      quantity: 1,
      price: 8500
    },
    {
      id: 3,
      name: "USB-C Cable",
      quantity: 3,
      price: 500
    }
  ],
  totalAmount: 15000,
  status: "Delivered"
};

console.log(getStatus(order))