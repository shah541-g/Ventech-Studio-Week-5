const removeDuplicates = (arr) => {
  const mySet = new Set([...arr]);
  return [...mySet]
}

let arr = [1,2,3,3,5,5,7,7,9]
arr = removeDuplicates(arr)
console.log(arr)