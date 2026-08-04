const FRIENDS_COUNT = 2

function splitBill(...amounts){
  const total = amounts.reduce((acc,val) => acc+val,0)
  const perHead = total/FRIENDS_COUNT
  return perHead
}

console.log(splitBill(500,6000,14000,5800))