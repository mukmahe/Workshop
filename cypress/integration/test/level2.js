/// <reference types="Cypress" />

const LoginPage = require("../../page-objects/login_page")
const AppointmentPage = require("../../page-objects/appointment_page")
const ConfirmPage = require("../../page-objects/confirm_page")
const LogoutPage = require("../../page-objects/logout_page")
const hospitalData = require("../../fixtures/hospital_data.json")

describe('Validating Successful AppointmentPage of the User', function () {

    before('Visit URL and Login', function () {
        cy.visit(Cypress.env('url'))
    })

    beforeEach("Verify Login", function () {
        cy.fixture("login_data").then(function (login) {
            LoginPage.login(login.username, login.password)
            cy.url().should("contain", "#appointment")
        })
    })

    it("Book appointment for Hongkong CURA Healthcare Center", function () {
        AppointmentPage.bookAppointment(hospitalData.Hospital1, hospitalData.readmission, hospitalData.program, hospitalData.visitDate, hospitalData.comment)
        ConfirmPage.confirmFacilityName(hospitalData.Hospital1)
        ConfirmPage.confirmText()
    })

    it("Book appointment for Seoul CURA Healthcare Center", function () {
        /*
        ------ Assignment

         */

        //Solution
        AppointmentPage.bookAppointment(hospitalData.Hospital2, hospitalData.readmission, hospitalData.program, hospitalData.visitDate, hospitalData.comment)
        ConfirmPage.confirmFacilityName(hospitalData.Hospital2)
        ConfirmPage.confirmText()
    })

    afterEach("Verify Logout Functionality", function () {
        LogoutPage.logout()
    })
})