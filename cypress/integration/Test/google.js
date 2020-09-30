///<reference types="Cypress"/>

describe("Verify google",function () {
    it("Verify URL of google",function () {
        cy.visit("www.google.com")
        cy.url().should("contain","google")
    })
})