import { getTemplateModalBody } from "./imports.js";

export class ActionEngine{

  constructor(renderingEngine){
    this.renderingEngine = renderingEngine;
  }

  async fireProfileAction(event){
    const button = event.target.closest(".view-profile-btn");
    const id = button.dataset.userId;
    this.renderingEngine.openModal("Modal");
    await this.renderingEngine.updateModalsContent({ id }, "profile-modal");
  }
  async fireWeatherAction(event){
    const button = event.target.closest(".view-weather-btn");
    const lat = button.dataset.lat;
    const lon = button.dataset.lon;
    this.renderingEngine.openModal("Modal");
    await this.renderingEngine.updateModalsContent({ lat, lon }, "weather-modal");
  }
  fireModalCloseAction(){
    this.renderingEngine.updateElementsInnerHtml("Modal",getTemplateModalBody())
  }
  fire(action,event){
    if(action=="PROFILE-LAUNCH"){
      this.fireProfileAction(event)
    } else if (action=="WEATHER-MODAL-LAUNCH"){
      this.fireWeatherAction(event)
    } else if(action=="UPDATE-MODAL-CONTENT") {
      this.fireModalCloseAction()
    }
  }
}