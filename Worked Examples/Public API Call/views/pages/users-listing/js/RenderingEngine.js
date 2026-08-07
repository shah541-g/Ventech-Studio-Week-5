import { ContentUpdationEngine } from "./ContentUpdationEngine.js";
import { HtmlCreationEngine } from "./HtmlCreationEngine.js";

export class RenderingEngine {
  constructor(dataLoadingEngine) {
    this.htmlCreationEngine = new HtmlCreationEngine();
    this.contentUpdationEngine = new ContentUpdationEngine(this.htmlCreationEngine, dataLoadingEngine);
  }
  getElement(id) {
    return document.getElementById(id);
  }
  updateModalsContent(data,modalName){
    const element = this.getElement("Modal")
    this.contentUpdationEngine.updateModalsContent(data,modalName,element)
  }
  updateElementsInnerHtml(ElementName,templateHtml){
    const element = this.getElement(ElementName)
    this.contentUpdationEngine.updateElementsInnerHtml(element,templateHtml)
  }
  popErrorMessage(msg) {
    const toastElement = this.getElement("error-toast");

    toastElement.querySelector(".toast-body").textContent = msg;

    const toast = bootstrap.Toast.getOrCreateInstance(toastElement);

    toast.show();
  }
  displayLoadingCard() {
    const element = this.getElement("users-list-section")
    this.contentUpdationEngine.updateElementsInnerHtml(
      element,
      this.htmlCreationEngine.preparePlaceholderHtml(),
    );
  }
  renderUsersListing(Users) {
    const preparedHtml = this.htmlCreationEngine.prepareUsersListingHtml(Users);
    const element = this.getElement("users-list-section")
    this.contentUpdationEngine.updateElementsInnerHtml(
      element,
      preparedHtml,
    );
  }
  openModal(modalName) {
    const modalElement = this.getElement(modalName);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
