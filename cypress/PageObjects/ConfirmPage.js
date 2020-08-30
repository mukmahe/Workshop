/// <reference types="Cypress" />
const actions=require("../libs/pageHelper")

const locators = {
    facilityName: "id:facility",
    confirmText: "css:section[id='summary'] p[class='lead']"
}

function confirmFacilityName(facilityName) {
    actions.getWebElement(locators.facilityName).should("have.text",facilityName)
}

function confirmText() {
    actions.getWebElement(locators.confirmText).then(function (ele) {
        expect(ele.text().toString()).includes("appointment has been booked");
    })
}
module.exports={
    confirmFacilityName,
    confirmText
}