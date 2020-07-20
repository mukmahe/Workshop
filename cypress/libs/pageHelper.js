/// <reference types="Cypress" />

function getWebElement(locator) {
    let type = locator.substring(0, locator.indexOf(":"))
    let locatorText = locator.substring(locator.indexOf(":") + 1, locator.length)
    switch (type) {
        case "css":
            return cy.get(locatorText)
            break
        case "text":
            return cy.contains(locatorText)
            break
        default:
            return cy.get(`[${type}="${locatorText}"]`)
    }
}

function clickElement(locator) {
    getWebElement(locator).click({force: true})
}


module.exports = {
    getWebElement,
    clickElement
}