const getUser = () => {
  return new Promise((resolve,reject) => {
    setTimeout(
      () =>
        resolve({
          name: "Ahmad",
          age: 20,
        }),
      2000,
    );
  });
};
const getOrders = () => {
  return new Promise((resolve,reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 140,
            item: "bowl",
          },
          {
            id: 141,
            item: "bowl",
          },
          {
            id: 142,
            item: "bowl",
          },
        ]),
      2000,
    );
  });
};
const getNotifications = () => {
  return new Promise((resolve,reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            pastActivity: "Login",
            time: "12-09-2002"
          },
          {
            id: 2,
            pastActivity: "Logout",
            time: "12-09-2003"
          },
          {
            id: 3,
            pastActivity: "SignUp",
            time: "12-09-2000"
          },
        ]),
      2000,
    );
  });
};


async function main(){
  try {
      const response = await Promise.all([getUser(), getOrders(), getNotifications()])
  console.log(response)
  } catch (error) {
    console.log(error)
  }

}

main()