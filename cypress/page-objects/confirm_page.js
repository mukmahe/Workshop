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
    actions.getWebElement(locators.confirmText).then(function (ele) {
        expect(ele.text().toString()).includes("appointment has been booked"); //Chai assertion
    })
}
module.exports={
    confirmFacilityName,
    confirmText
}