const PI = 3.14;

try {
  PI = 5;
} catch (error) {
  console.error(`Error: ${error.message}`)
}