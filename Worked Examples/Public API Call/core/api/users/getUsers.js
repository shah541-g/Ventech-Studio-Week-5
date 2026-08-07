
const ROOTURL = "https://jsonplaceholder.typicode.com"

export async function getUsers(){
  try {
    const response = await fetch(`${ROOTURL}/users`);
    if(!response.ok){
      throw new Error(`Failed to fetch users`)
    }
    return await response.json()
  } catch (error) {
    throw error;
  }
}
export async function getSpecificUser(id){
  try {
    const response = await fetch(`${ROOTURL}/users/${id}`);
    if(!response.ok){
      throw new Error(`Failed to fetch users`)
    }
    return await response.json()
  } catch (error) {
    throw error;
  }
}