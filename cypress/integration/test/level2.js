/// <reference types="Cypress" />

const LoginPage = require("../../page-objects/login_page");
const AppointmentPage = require("../../page-objects/appointment_page");
const ConfirmPage = require("../../page-objects/confirm_page");
const LogoutPage = require("../../page-objects/logout_page");

describe('Validating Successful AppointmentPage of the User', function () {

    before('Visit URL and Login', function () {
        cy.visit(Cypress.env('url'));
        cy.fixture("test_data.json").then(function (data) {
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
        LogoutPage.logout();
    })
})