/// <reference types="Cypress" />
const actions = require("../libs/page_helper")

const locators = {
    computerName: "css:#name",
    introduced: "css:#introduced",
    company: "css:#company",
    createBtn: "css:[value='Create this computer']",
    confirmMessage:"css:.alert-message.warning"
}

function addComputer(compName,date,company) {
    actions.getWebElement(locators.computerName).type(compName)
    actions.getWebElement(locators.introduced).type(date)
    actions.getWebElement(locators.company).select(company)
    actions.clickElement(locators.createBtn)
}

function confirmMessage() {
    actions.getWebElement(locators.confirmMessage).should("include.text", "Done")
}

module.exports = {
    addComputer,
    confirmMessage
}