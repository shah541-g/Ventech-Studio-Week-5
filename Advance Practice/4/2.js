async function main() {
  const user = {
    name: "Ahmad",
    email: "syedahmadalaishah@gmail.com",
  };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: user,
    });
    if(response.status==201){
      console.log("Congratulations")
    }

  } catch (error) {
    console.log("Error")
  }
}


main()