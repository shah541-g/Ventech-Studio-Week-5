async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log("name: "+data.name)
    console.log("email: "+data.email)
  } catch (error) {
    console.log("baad may aa jaye. abhi kuch nahi teray liye")
  }
}

fetchData()