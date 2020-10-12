///<reference types="Cypress"/>

describe("Demo promise handling", function () {
    it("Grab text and Print", function () {
        cy.visit("https://katalon-demo-cura.herokuapp.com")
        /*
        const webElement=cy.get("#btn-make-appointment")
        //Not allowed since cy.get is cypress command and const webElement is javascript command
        const text=webElement.text()
         */
        //Hence to to mitigage it you have to use
        cy.get("#btn-make-appointment").then(function (ele) {
            const text = ele.text()
            cy.log(text)
            /* Refer PPT for more links
            Over here we are asking cypress to find element and then only execute the commands inside
            cypress is async at its heart, hence if you want to mix js code and cypress code, you will have to resolve promise*/
        })
    })
})