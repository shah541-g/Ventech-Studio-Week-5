const user = {
  name: "Syed Abdul Ali Shah",
  email: "syedabdulalishah.786@gmail.com"
}

const isValidEmail = (email) => {
  return email.trim() !== ""
}

isValidEmail(user.email) ? console.log("Valid Email") : console.error("Invalid Email")