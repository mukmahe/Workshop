/// <reference types="Cypress" />    //Added for auto suggestions

describe('Validating Successful Appointment of the User', function () {  //This is our test Suite

    before('Visit URL and Login', function () {   //before block is like testNG beforeTest. Runs once before 1st it block
        cy.visit("http://computer-database.gatling.io/computers")  //cy is just like driver in selenium
        // It is a global command which helps us to invoke any cypress command
    })

    it("Add new Computer in the Database", function () {  //First Test Case
        cy.get("#add").click() //Clicking on add button
        //using cy.get we will capture the webElement
        //using click we click on the button
        cy.get("#name").type("Mukul Maheshwari") //Typing name in Computer Name text box
        //Type command is used to type in a field
        cy.get("#introduced").type("1991-10-22") //Entering date in introduced field
        cy.get("#company").select("RCA")
        //Using select command we select a dropdown
        cy.get("[value='Create this computer']").click() //Clicking on Create this computer
        cy.get(".alert-message.warning").should("include.text", "Done") //Verifying if message contains Done
        //should is inbuilt assertion of Cypress
    })

    it("Search for a computer name", function () {
        cy.get("#searchbox").type("Columbia") //Typing Columbia in searchBox
        cy.get("#searchsubmit").click()  //Clicking on filter by name
        cy.get(".computers.zebra-striped>tbody>tr>td>a").should("have.text","Columbia")
        //Verifying if the search result is correct by assertion
    })
})
//To execute enter npx cypress open
//To execute in headless npx cypress run
//Check more options of executing and configuring scripts in package.json->scripts