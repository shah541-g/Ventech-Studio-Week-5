import { DataLoadingEngine } from "./DataLoadingEngine.js";
import { ListeningEngine } from "./ListeningEngine.js";
import { RenderingEngine } from "./RenderingEngine.js";

export class App{
  constructor(){
    this.Users = []
    this.dataLoadingEngine = new DataLoadingEngine()
    console.log("From App.js: " + this.dataLoadingEngine)
    this.renderingEngine = new RenderingEngine(this.dataLoadingEngine);
    this.listeningEngine = new ListeningEngine(this.renderingEngine);
  }
  async run(){
    await this.listeningEngine.addEventListenersToDocument();
    this.renderingEngine.displayLoadingCard()
    try {
      this.Users = await this.dataLoadingEngine.loadUsers();
      
    } catch (error) {
      this.renderingEngine.popErrorMessage(error.message)
    }
    this.renderingEngine.renderUsersListing(this.Users);
  }
}