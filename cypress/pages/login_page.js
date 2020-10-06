/// <reference types="Cypress" />
const actions=require("../libs/page_helper")

const locators = {
    makeAppointment: "id:btn-make-appointment",
    username: "id:txt-username",
    password: "id:txt-password",
    loginBtn: "id:btn-login"
}

function login(username,password) {
    actions.clickElement(locators.makeAppointment)
    actions.getWebElement(locators.username).type(username)
    actions.getWebElement(locators.password).type(password)
    actions.clickElement(locators.loginBtn)
}

module.exports={
    login
}