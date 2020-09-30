/// <reference types="Cypress" />
const actions = require("../libs/pageHelper")

const locators = {
    facility: "id:combo_facility",
    readmission: "id:chk_hospotal_readmission",
    program: "css:[value='{replace}']",
    visitDate: "id:txt_visit_date",
    visitDate_datePick: "css:[class='datepicker-switch']",
    comment: "id:txt_comment",
    bookAppointment: "id:btn-book-appointment"
}

function bookAppointment(facilityName, readmission, program, visitDate, comment) {
    actions.getWebElement(locators.facility).select(facilityName);
    if (readmission==="yes")
        actions.clickElement(locators.readmission);
    actions.clickElement(actions.replacePlaceHolder(locators.readmission,program));
    handleCalender(visitDate);
    actions.getWebElement(locators.comment).type(comment);
    actions.clickElement(locators.bookAppointment);
}

function handleCalender(date) {
    let dateSplit=date.split("/");
    actions.clickElement(locators.visitDate);
    actions.getWebElement(locators.visitDate_datePick).first().click();
    cy.contains(dateSplit[1]).click({force:true});
    cy.contains(dateSplit[0]).click({force:true});
}

module.exports = {
    bookAppointment
}