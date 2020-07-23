/// <reference types="Cypress" />    //Added for auto suggestions

describe('Validating Successful Addition to Cart', function () {  //This is our test Suite

    before('Visit URL and Login', function () {   //Like testNG before Method. Runs before every test case
        cy.visit("https://spree-vapasi.herokuapp.com/login")  //cy is just like driver. It is a global command which helps us to invoke any cypress command
        //We need not make object of cy. It's globally available
        cy.get("input[id='spree_user_email']").type("mukul@gmail.com")     //You can also use wildcards
        cy.get("input[id='spree_user_password']").type("123456")
        cy.get("[value='Login']").click()
        //We should never make one test dependent on other test
    })

    it("Select Product Category as Bag and name as Ruby on Rails and add product to cart", function () {  //First Test Case
        cy.contains("Bags").click()
        cy.get("[title='Ruby on Rails Tote']").click()
        //Now here we are just verifying if Cart API is giving us 200 or not? If yes then proceed
        cy.server()
        cy.route("/cart_link").as("cart")
        cy.get("#add-to-cart-button").click()
        cy.wait("@cart").then(function (response) {
            expect(response.status).equals(200)
        })
        cy.get("table[id='cart-detail']>tbody[id='line_items']>tr").should("have.length",1)
    })

    it("Select Product Category as Mugs and name as Ruby on Rails Mug and add Product to Cart", function () {
        cy.get("#home-link").click()

        //Assignment --
    })
})