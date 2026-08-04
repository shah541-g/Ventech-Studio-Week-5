function createLinks(arr){
  return arr.map(x=>`https://jsonplaceholder.typicode.com/users/${x}`)
}

async function main(){

  const ids = [1,2,3]
  const links = createLinks(ids)
  const promisesList = links.map(x=>fetch(x))
  try {
    const responses = await Promise.all(promisesList)
    const secondPromiseList = responses.map(response=>response.json())
    const data = await Promise.all(secondPromiseList)
    console.log(data)
  } catch (error) {
    console.log("Error")
  }
}

main()