import {getErrorModal} from "./imports.js"
export class ContentUpdationEngine {
  constructor(htmlCreationEngine,dataLoadingEngine){
    this.htmlCreationEngine = htmlCreationEngine;
    this.dataLoadingEngine = dataLoadingEngine;
  }
  updateElementsInnerHtml(element, htmlContent) {
    element.innerHTML = "";
    element.innerHTML = htmlContent;
  }
  async updateModalsContent(data, modalType,element) {
  let preparedHtml;
  try {
    if (modalType === "profile-modal") {
      const { id } = data;
      const user = await this.dataLoadingEngine.getSpecificUserData(id);
      preparedHtml = this.htmlCreationEngine.prepareUserProfileModalHtml(user);
    } else if (modalType === "weather-modal") {
      const { lat, lon } = data;
      const weatherData = await this.dataLoadingEngine.getWeather(lat,lon);
      preparedHtml = this.htmlCreationEngine.prepareWeatherModalHtml(weatherData);
    }
  } catch (error) {
    preparedHtml = getErrorModal(error);
  } finally {
    this.updateElementsInnerHtml(element, preparedHtml);
  }
}
}
