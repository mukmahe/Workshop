/// <reference types="Cypress" />

const LoginPage = require("../../pages/login_page")
const AppointmentPage = require("../../pages/appointment_page")
const ConfirmPage = require("../../pages/confirm_page")
const LogoutPage = require("../../pages/logout_page")
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
        AppointmentPage.bookAppointment(hospitalData.Hospital2, hospitalData.readmission, hospitalData.program, hospitalData.visitDate, hospitalData.comment)
        ConfirmPage.confirmFacilityName(hospitalData.Hospital2)
        ConfirmPage.confirmText()
    })

    afterEach("Verify Logout Functionality", function () {
        LogoutPage.logout()
    })
})
