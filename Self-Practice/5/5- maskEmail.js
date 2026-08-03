const maskEmail = (email) => {
  return email.split("@")[0].substring(0,1)+"***@"+email.split("@")[1]
}

console.log(maskEmail("syedabdulalishah.786@gmail.com"))