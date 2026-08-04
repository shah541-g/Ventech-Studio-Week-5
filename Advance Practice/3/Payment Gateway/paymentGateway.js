function paymentResolver(payment){
  return new Promise((resolve,reject)=>{
    if(payment<=0){
      reject("invalid amount")
    } else{
      setTimeout(()=> resolve("payment processed"), 1000)
    }
  })
}
async function main(){
  try {
    const response = await paymentResolver(-500)
    console.log(response)
    
  } catch (error) {
    console.log(error)
  }
}

main()