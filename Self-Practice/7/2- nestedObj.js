
const extractCity = (student) => {
  const {name,address:{city,country}} = student;
  
  return city;
}

const student = {
  name: "ahmad",
  address: {
    city: "lahore",
    country: "pakistan"
  }
}


console.log(extractCity(student))
