/// <reference types="Cypress" />    //Added for auto suggestions

//Adding Fixtures and Env Variables
describe('Validating Successful Login ', function () {  //This is our test Suite
    beforeEach('Visit URL', function () {   //Like testNG before Method. Runs before every test case
        cy.visit(Cypress.env("url"))
        cy.fixture("example.json").then(function (data) {
            this.data = data
        })
    })

    it("Enter Incorrect email id and password", function () {
        cy.get("input[id='usr']").type(this.data.incorrectName)
        cy.get("input[id='pwd']").type(this.data.incorrectPass)
        cy.get("[value='Login']").click()
        cy.get("#case_login>h3").should("have.text", this.data.failureMessage)
    })

    it("Enter Correct email id and password", function () {
        cy.get("input[id='usr']").type(this.data.correctName)
        cy.get("input[id='pwd']").type(this.data.correctPass)
        cy.get("[value='Login']").click()
        cy.get("#case_login>h3").should("have.text", this.data.successMessage)
    })
})