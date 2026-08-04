function anotherCallBack(msg) {
  return function (resolve, reject) {
    setTimeout(() => resolve(msg), 2000);
  };
}

function callback(msg) {
  return new Promise(anotherCallBack(msg));
}

async function main(aCallback, msg) {
  const response = await aCallback(msg);
  console.log(
    response
  )
  console.log("hye");
}

main(callback, "Hello");
