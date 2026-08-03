const getIdsFor10FakeUsers = () => {
  const ids = []
  while(ids.length<10){
    ids.push(Date.now()+`${ids.length}`)
  }
  return ids;
}

console.log(getIdsFor10FakeUsers())
