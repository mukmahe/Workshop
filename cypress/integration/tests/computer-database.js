/// <reference types="Cypress" />

const landingPage=require("../../pages/landing_page")  //require is just like imports in java
const addComputer = require("../../pages/add_computer")
const computerData=require("../../fixtures/computer_data.json") //Fixtures- Test Data
describe('Validating Computer Database Application', function () {

    before('Visit URL', function () {
        cy.visit(Cypress.env('url'))
    })
    //Added pages landingPage and addComputer in pages folder
    //Added .json file, which contains all the test data
    it("Add new Computer in the Database", function () {
        landingPage.clickAddBtn()
        addComputer.addComputer(computerData.computerName,computerData.date,computerData.company)
        addComputer.confirmMessage()
    })

    it("Search for a computer name", function () {
        landingPage.filterComputer(computerData.searchComputer)
        landingPage.verifySearchResult(computerData.searchComputer)
    })
})

/*
To execute
1. open mode = npx cypress open
2. headless mode with electron as default browser => npx cypress run
3. headless mode with a customized browser => npx cypress run -b browserName* --headless
4. headless mode with quick env set => npx cypress run --env url=environment* --headless
5. headless mode if you want to run only specific test case =>
npx cypress run --headless --spec "./cypress/integration/tests/computer-database.js"
6. You can combine also
npx cypress run --headless -b chrome --spec "./cypress/integration/tests/computer-database.js" --env url=http://computer-database.gatling.io/computers

browserName* = chrome/edge
environment* = your env (http://computer-database.gatling.io/computers)
 */