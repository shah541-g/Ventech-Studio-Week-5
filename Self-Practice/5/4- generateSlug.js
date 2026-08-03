const generateSlug = (title) => {
  return title.toLowerCase().split(" ").join("-");
}

console.log(generateSlug("Syed Abdul Ali Shah"))