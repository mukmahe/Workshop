/// <reference types="Cypress" />

function getWebElement(locator) {
    let type = locator.substring(0, locator.indexOf(":"));
    let locatorText = locator.substring(locator.indexOf(":") + 1, locator.length);
    switch (type) {
        case "css":
            return cy.get(locatorText);
            break;
        case "text":
            return cy.contains(locatorText);
            break;
        case "id":
            return cy.get(`[id="${locatorText}"]`);
            break;
        default:
            throw new Error("Wrong locator passed " + locator);
    }

}

function clickElement(locator) {
    getWebElement(locator).click();
}

function replacePlaceHolder(locator,value){
    locator=locator.replace("{replace}",value);
    return locator;
}
module.exports={
    clickElement,
    getWebElement,
    replacePlaceHolder
}