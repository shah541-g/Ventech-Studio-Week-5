import {User} from "../models/User.js"

export class UserRepo {
  constructor(){
    this.users = []
  }
  createNewUser(email, password) {
    this.users = [...this.users, new User(email, password)];
  }
}
