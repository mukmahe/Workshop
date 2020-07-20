/// <reference types="Cypress" />    //Added for auto suggestions

//Adding POM
//Added Chaining
const loginPage = require("../../pageObjects/LoginPage")
const actions = require("../../libs/pageHelper")

describe('Validating Successful Login ', function () {  //This is our test Suite

    beforeEach('Visit URL', function () {
        cy.visit(Cypress.env("url"))
    })

    it("Enter Incorrect email id and password", function () {
        cy.fixture("example.json").then(function (data) {
            loginPage.login(data.incorrectName, data.incorrectPass)
            loginPage.verifyMessage(data.failureMessage)
            loginPage.goBack()
        })
    })

    it("Enter Correct email id and password", function () {
        cy.fixture("example.json").then(function (data) {
            loginPage.login(data.correctName, data.correctPass)
            loginPage.verifyMessage(data.successMessage)
            loginPage.goBack()
        })
    })
})