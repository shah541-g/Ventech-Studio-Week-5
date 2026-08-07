import * as App from "./imports.js"
import { ActionEngine } from "./ActionEngine.js";


export class ListeningEngine{
  constructor(renderingEngine){
    this.actionEngine = new ActionEngine(renderingEngine)
  }

  async addEventListenersToDocument() {
    document.addEventListener("click", async (event) => {
      if (event.target.closest(".view-profile-btn")) {
        this.actionEngine.fire("PROFILE-LAUNCH",event)
      } else if (event.target.closest(".view-weather-btn")) {
        this.actionEngine.fire("WEATHER-MODAL-LAUNCH",event)
      } else if(event.target.closest(".btn-close")){
        this.actionEngine.fire("UPDATE-MODAL-CONTENT")
      }
    });
  }
}