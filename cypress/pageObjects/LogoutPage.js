/// <reference types="Cypress" />
const actions=require("../libs/pageHelper")

const locators = {
    menuToggle: "id:menu-toggle",
    logout: "css:[href*='logout']",
    makeAppointmentBtn: "id:btn-make-appointment",
}

function logout() {
    actions.clickElement(locators.menuToggle);
    actions.clickElement(locators.logout);
    actions.getWebElement(locators.makeAppointmentBtn).should("be.visible");
}

module.exports={
    logout
}