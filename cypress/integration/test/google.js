///<reference types="Cypress"/>

describe("Verify google",function () {

    it("Verify google URL",function () {
        cy.visit("https://www.google.com/?gws_rd=ssl")
        cy.url().should("contain","google")
    })
})