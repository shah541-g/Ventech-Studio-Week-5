import { getUsers, getSpecificUser, getWeatherDetails } from "./imports.js";

export class DataLoadingEngine {

  async loadUsers() {
    try {
      const users = await getUsers();
      return [...users];
    } catch (error) {
      throw error;
    }
  }
  async getSpecificUserData(id) {
    try {
      const user = await getSpecificUser(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async getWeather(lat, lon) {
    try {
      const data = await getWeatherDetails(lat, lon);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
