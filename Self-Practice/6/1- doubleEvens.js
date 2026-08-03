const doubleEvens = (arr) => {
  return arr.filter(x => x%2===0 ).map(x => 2*x)
}

let arr = [1,2,3,4,5,6,7,8,9]
arr = doubleEvens(arr)
console.log(arr)