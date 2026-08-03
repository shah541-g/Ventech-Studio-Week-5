const getInitials = (firstName, lastName) => {
  return firstName.substring(0,1) + lastName.substring(0,1)
}

const extractFirstAndLastName = (name) => {
  const nameParts = name.split(" ")
  return [nameParts[0],nameParts[1]]
}

const [fName, lName] = extractFirstAndLastName("Syed Abdul Ali Shah")
console.log(getInitials(fName, lName))