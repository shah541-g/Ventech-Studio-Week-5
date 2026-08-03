
const describeBook = (book) => {
  const {title, author, pages} = book;
  return `Title: ${title} \nAuthor: ${author} \nPages: ${pages}`
}

const book = {
  title: "Finite and Infinite Games",
  author: "James P. Carse",
  pages: 160
}

console.log(describeBook(book))