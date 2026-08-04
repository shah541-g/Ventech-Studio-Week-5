import { UserService } from "./services/user.service.js";
import { UserRepo } from "./repo/user.repo.js";
import { UserController } from "./controller/user.controller.js";

class Main {
  constructor() {
    this.controller = null;
    this.initializeDependencies()
  }
  getElement = (id) => document.getElementById(id);

  initializeDependencies() {
    const repo = new UserRepo();
    const service = new UserService(repo);
    const controller = new UserController(service);
    this.controller = controller;
  }

  main() {
    
    const form = this.getElement("form");
    const password = form.elements.password.value;
    const email = form.elements.email.value;
    const response = this.controller.createUser(email, password);
    alert(response.message)
  }
}

const main = new Main();

const form = main.getElement("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.main()
})
