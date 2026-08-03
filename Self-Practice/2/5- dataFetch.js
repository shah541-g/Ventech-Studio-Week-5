

const response = await fetch("https://jsonplaceholder.typicode.com/posts")

if (response.status==200){
  console.log("Data Fetched successfully")
} else{
  console.error("Fetch Failed")
}
// const data = response.json()

// console.log(data)