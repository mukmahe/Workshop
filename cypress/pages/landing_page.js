/// <reference types="Cypress" />
const actions = require("../libs/page_helper")

const locators = {
    addBtn: "css:#add",  //locators
    searchBox: "css:#searchbox",
    searchButton: "css:#searchsubmit",
    searchResult: "css:.computers.zebra-striped>tbody>tr>td>a"
}

//business functions
function clickAddBtn() {
    actions.clickElement(locators.addBtn)
}

function filterComputer(computerName) {
    actions.getWebElement(locators.searchBox).type(computerName)
    actions.clickElement(locators.searchButton)
}

function verifySearchResult(computerName){
    actions.getWebElement(locators.searchResult).should("include.text", computerName)
}

//We are exporting all the business functions so that they can be used in test case
module.exports = {
    clickAddBtn,
    filterComputer,
    verifySearchResult
}