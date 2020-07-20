/// <reference types="Cypress" />    //Added for auto suggestions

describe('Validating Successful Login ', function () {  //This is our test Suite

    beforeEach('Visit URL', function () {   //Like testNG before Method. Runs before every test case
        cy.visit("http://testing-ground.scraping.pro/login")  //cy is just like driver. It is a global command which helps us to invoke any cypress command
        //We need not make object of cy. It's globally available
    })

    it("Enter Incorrect email id and password", function () {  //First Test Case
        cy.get("input[id='usr']").type("abc")     //You can also use wildcards
        cy.get("input[id='pwd']").type("abc")
        cy.get("[value='Login']").click()
        cy.get("#case_login>h3").should("have.text", "ACCESS DENIED!") //Can be done using Promise Handling also
    })
    it("Enter Correct email id and password", function () {  //First Test Case
        cy.get("input[id='usr']").type("admin")     //You can also use wildcards
        cy.get("input[id='pwd']").type("12345")
        cy.get("[value='Login']").click()
        cy.get("#case_login>h3").should("have.text", "WELCOME :)")
    })
})