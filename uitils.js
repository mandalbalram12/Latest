import CustomActions from "./webElementActions";

export class uiUtils extends CustomActions{
constructor() {
super();
}

/**

Generate a selector based on the component selector
@param childSelector the selector you are looking for within component
*/
getChildSelector(childSelector) {
return `${this.element} ${childSelector}`;
}

/** 
Gets a webelement instance for the specified child selector
@param childSelector the selector you are looking for within current component
*/
getChildElement(childSelector) {
return this.getLocator(this.getChildSelector(childSelector));
}
/**

Gets a webelement matching the specified selector
@param selector the exact selector you are looking for within the component
*/
async getExactElement() {
return this.getLocator(this.element);

}

}
