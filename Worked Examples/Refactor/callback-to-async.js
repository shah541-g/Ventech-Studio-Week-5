function delay(){
  return new Promise((resolve,reject) => {
    setTimeout(()=>resolve({
      name:"Ali"
    }),2000)
  })
}

function runCallback(){
  delay().then(d => console.log(d.name))
}

runCallback()

async function runMe(){
  const response = await delay()
  console.log(response.name)
}

runMe()