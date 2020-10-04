///<reference types="Cypress"/>

describe("Demo File upload functionality",function () {

    it("Verify if file is uploaded", function () {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("data")
    })
})