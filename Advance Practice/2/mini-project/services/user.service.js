import { validateCredentials } from "../validator/user.validator.js"

export class UserService{

  constructor(repo){
    this.userRepo = repo
  }
  createUser = (email, password) => {
  if(!validateCredentials(email,password)){
    throw new Error("INVALID_CREDENTIALS")
  } 
  this.userRepo.createNewUser(email,password)
  return true;
}
}

