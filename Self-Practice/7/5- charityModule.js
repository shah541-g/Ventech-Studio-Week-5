const getRecipt = (donor) => {
  const { id, name, amount, date, paymentMethod, receiptNumber, purpose } =
    donor;
  const receipt = `
  ===========================
  |    ${name}'s Receipt   |
  ===========================
  |     ID: ${id}           |
  |     Amount: ${amount}           |
  |     Date: ${date}           |
  |     Payment Method: ${paymentMethod}           |
  |     Receipt No: ${receiptNumber}           |
  |     Purpose: ${purpose}           |
  ===========================
  `;
  return receipt
};

const donor = {
  id: "DON-1001",
  name: "Ahmed Khan",
  amount: 5000,
  date: "2026-08-03",
  paymentMethod: "Bank Transfer",
  receiptNumber: "RCP-2026-001",
  purpose: "Education Fund",
};

console.log(getRecipt(donor))