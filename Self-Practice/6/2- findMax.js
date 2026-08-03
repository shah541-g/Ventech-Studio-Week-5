const findMax = (arr) => {
  let max = -Infinity;
  arr.forEach(element => {
    max = element>max ? element : max;
  });
  return max;
}

let arr = [1,2,3,4,5,6,7,8,9]
let max = findMax(arr)
console.log(max)