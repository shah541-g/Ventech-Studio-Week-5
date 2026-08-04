function deliverOrder(orderId) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`Order#${orderId} delivered`),2000)
  })
}

async function main(){
  try {
    const deliveryResponse = await deliverOrder(12)
    console.log(deliveryResponse)
  } catch (error) {
    console.error(error.message)
  }
}

main()