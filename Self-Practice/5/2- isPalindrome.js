const reverseMe = (str) => {
  return str.split("").reverse().join("");
};

const tolowerCase = (str) => {
  return str.toLowerCase();
};

const preProcess = (str) => {
  const preprocessedStr = tolowerCase(str);
  const reversedString = reverseMe(preprocessedStr);
  return [preprocessedStr,reversedString]
};

const isPalidrome = (str1,str2) => {
  return str1 == str2;
};

const main = (str) => {
  const [str1,str2] = preProcess(str)
  console.log(isPalidrome(str1,str2));
}

main("Madam")