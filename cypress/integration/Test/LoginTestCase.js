/// <reference types="Cypress" />    //Added for auto suggestions

//Adding Fixtures and Env Variables
describe('Validating Successful Login ', function () {  //This is our test Suite

    beforeEach('Visit URL', function () {   //Like testNG before Method. Runs before every test case
        cy.visit(Cypress.env("url"))
    })

    it("Enter Incorrect email id and password", function () {
        cy.fixture("example.json").then(function (data) {
            cy.get("input[id='usr']").type(data.incorrectName)
            cy.get("input[id='pwd']").type(data.incorrectPass)
            cy.get("[value='Login']").click()
            cy.get("#case_login>h3").should("have.text", data.failureMessage)
        })
    })
    it("Enter Correct email id and password", function () {
        cy.fixture("example.json").then(function (data) {
            cy.get("input[id='usr']").type(data.correctName)
            cy.get("input[id='pwd']").type(data.correctPass)
            cy.get("[value='Login']").click()
            cy.get("#case_login>h3").should("have.text", data.successMessage)
        })
    })
})