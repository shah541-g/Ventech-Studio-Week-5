let myArray = [5, 6, 7, 8, -9];

myArray.forEach((val) =>
  val > 0 ? console.log(val) : console.error("Negative number"),
);
