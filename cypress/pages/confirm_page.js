/// <reference types="Cypress" />
const actions=require("../libs/page_helper")

const locators = {
    facilityName: "id:facility",
    confirmText: "css:section[id='summary'] p[class='lead']"
}

function confirmFacilityName(facilityName) {
    actions.getWebElement(locators.facilityName).should("have.text",facilityName) // Cypress built in
}

function confirmText() {
    actions.getWebElement(locators.confirmText).should("include.text","appointment has been booked")
}
module.exports={
    confirmFacilityName,
    confirmText
}