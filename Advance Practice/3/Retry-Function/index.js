const getUser = () => {
  return new Promise((resolve,reject) => {
    setTimeout(
      () =>
        reject("Error"),
      2000,
    );
  });
};

async function retry(callback,retriesCount){
  if(retriesCount<=0) return 
  try {
    const response = await callback()
  } catch (error) {
    console.log(error)
    retry(callback,retriesCount-1)
  }
}

function main(){
  retry(getUser,3)
}

main()