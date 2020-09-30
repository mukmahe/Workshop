/// <reference types="Cypress" />    //Added for auto suggestions

describe('Validating Successful Appointment of the User', function () {  //This is our test Suite

    before('Visit URL and Login', function () {   //Like testNG before Method. Runs before every test case
        cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login");  //cy is just like driver.
        // It is a global command which helps us to invoke any cypress command
        //We need not make object of cy. It's globally available
    })

    beforeEach("Verify Login", function () {
        //We should never make one test dependent on other test
        cy.get("#btn-make-appointment").click();
        cy.get("[id='txt-username']").type("John Doe");
        cy.get("[id='txt-password']").type("ThisIsNotAPassword");
        cy.get("[id='btn-login']").click();
        cy.url().should("contain", "#appointment");
    })

    it("Book appointment for Hongkong CURA Healthcare Center", function () {  //First Test Case
        cy.get("#combo_facility").select("Hongkong CURA Healthcare Center");
        cy.get("#chk_hospotal_readmission").click();
        cy.get("[value='Medicaid']").click();
        //Handle Calender to enter 28-Sep-2020
        cy.get("#txt_visit_date").click();
        cy.get("[class='datepicker-switch']").first().click();
        cy.contains("Sep").click({force:true});
        cy.contains("28").click({force:true});

        cy.get("#txt_comment").type("Test Comment")
        cy.get("#btn-book-appointment").click();
        cy.get("#facility").should("have.text","Hongkong CURA Healthcare Center")
        cy.get("section[id='summary'] p[class='lead']").then(function (ele) {
            expect(ele.text().toString()).includes("appointment has been booked");
        })
    })

    it.skip("Book appointment for Seoul CURA Healthcare Center", function () {
        /*
        ------ Assignment

         */
    })

    afterEach("Verify Logout Functionality", function () {
        cy.get("#menu-toggle").click();
        cy.get("[href*='logout']").click();
        cy.get("#btn-make-appointment").should("be.visible");
    })
})