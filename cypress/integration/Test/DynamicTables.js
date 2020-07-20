/// <reference types="Cypress" />    //Added for auto suggestions

const actions = require("../../libs/pageHelper")

describe('Validating Dynamic Table ', function () {

    before(function () {
        cy.visit(Cypress.env("dynamicTable"))
    })

    it("Handling dynamic Webtable", function () {
        cy.get("table#customers>tbody>tr").each(function (ele, index, list) {
            const company = ele.find("td:nth-child(1)").text()
            if (company.includes("Island Trading")) {
                cy.get("table#customers>tbody>tr").eq(index).find("td:nth-child(3)").then(function (country) {
                    cy.log(country.text())
                })
                return false
            }
        })
    })
})
