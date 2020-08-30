/// <reference types="Cypress" />

const LoginPage = require("../../PageObjects/LoginPage");
const AppointmentPage = require("../../PageObjects/AppointmentPage");
const ConfirmPage=require("../../PageObjects/ConfirmPage")
describe('Validating Successful AppointmentPage of the User', function () {

    before('Visit URL and Login', function () {
        cy.visit(Cypress.env('url'));
        cy.fixture("TestData.json").then(function (data) {
            this.data = data;
        })
    })

    beforeEach("Verify Login", function () {
        LoginPage.login(this.data.username, this.data.password);
        cy.url().should("contain", "#appointment");
    })

    it("Book appointment for Hongkong CURA Healthcare Center", function () {
        AppointmentPage.bookAppointment(this.data.Hospital1, this.data.readmission, this.data.program, this.data.visitDate, this.data.comment);
        ConfirmPage.confirmFacilityName(this.data.Hospital1);
        ConfirmPage.confirmText();
    })

    it.skip("Book appointment for Seoul CURA Healthcare Center", function () {
        /*
        ------ Assignment

         */
    })

    afterEach("Verify Logout Functionality", function () {
        cy.get("#menu-toggle").click();
        cy.get("[href*='logout']").click();
        cy.get("#btn-make-appointment").should("be.visible");
    })
})