const countVowels = (str) => {
  let vowelsCount = 0
  const VOWELS = ['a','e','i','o','u']
  str.split("").forEach(element => {
    if(VOWELS.includes(element))
    vowelsCount+=1
  });
  return vowelsCount
}

const tolowerCase = (str) => {
  return str.toLowerCase();
};

let name = "Syed Abdul Ali Shah"
name = tolowerCase(name)
console.log(countVowels(name))