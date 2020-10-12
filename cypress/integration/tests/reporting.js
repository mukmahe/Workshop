/// <reference types="Cypress" />

const landingPage = require("../../pages/landing_page")  //require is just like imports in java
const addComputer = require("../../pages/add_computer")
const computerData = require("../../fixtures/computer_data.json") //Fixtures- Test Data
describe('Validating Computer Database Application', function () {

    before('Visit URL', function () {
        cy.visit(Cypress.env('url'))
    })
    //Added pages landingPage and addComputer in pages folder
    //Added .json file, which contains all the test data
    it("Add new Computer in the Database", function () {
        landingPage.clickAddBtn()
        addComputer.addComputer(computerData.computerName, computerData.date, computerData.company)
        addComputer.confirmMessage()
    })

    it("Search for a computer name", function () {
        landingPage.filterComputer(computerData.searchComputer)
        landingPage.verifySearchResult(computerData.searchComputer)
    })
})

/*
Refer PPT for more links
To add reporting feature in your project
Step 1: npm install --save-dev mochawesome
Step 2: Add this file in your cypress.json file
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": false,
    "json": true
  }
}
Step 3: Just simply run your tests in run mode
npx cypress run

 */

