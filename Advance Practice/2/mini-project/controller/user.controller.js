export class UserController {
  constructor(service) {
    this.service = service;
  }

  createUser(email, password) {
    try {
      const status = this.service.createUser(email, password);
      return {
        success: status,
        message: "User Created Successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: `Error Occured ${error.message}`,
      };
    }
  }
}
