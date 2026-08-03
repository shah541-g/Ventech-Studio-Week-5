const getSumOf100 = () => {
  let sum = 0
  for(let i=1;i<101;i++){
    sum+=i;
  }
  return sum
}

console.log(getSumOf100())