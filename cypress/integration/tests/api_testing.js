///<reference types="Cypress"/>

describe("API Testing",function () {

    it("GET API testing",function () {
        cy.request("https://httpbin.org/get").then(function (response) {
            expect(response.status).equals(200)
        })
    })

    it("POST API Testing",function () {
        cy.request("POST","https://httpbin.org/post",{"name":"Mukul"}).then(function (response) {
            expect(response.status).equals(200)
            expect(response.body.json.name).equals("Mukul")
        })
    })

    it("POST API Testing",function () {
        cy.request("POST","https://httpbin.org/post",{"name":"Thoughtworks"}).then(function (response) {
            expect(response.status).equals(200)
            expect(response.body.json.name).equals("Thoughtworks")
        })
    })
})