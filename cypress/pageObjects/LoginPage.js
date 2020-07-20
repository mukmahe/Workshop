/// <reference types="Cypress" />

const actions = require("../libs/pageHelper")

const locators = {
    "username": "id:usr",
    "password": "id:pwd",
    "loginButn": "value:Login",
    "message": "css:#case_login>h3",
    "goBack": "text:<< GO BACK"
}

function login(username, password) {
    actions.getWebElement(locators.username).type(username)
    actions.getWebElement(locators.password).type(password)
    actions.clickElement(locators.loginButn)
}

function verifyMessage(message) {
    actions.getWebElement(locators.message).should("have.text", message)
}

function goBack() {
    actions.getWebElement(locators.message).then(function (ele) {
        if (ele.text().includes("ACCESS DENIED"))
            actions.clickElement(locators.goBack)
    })
}

module.exports = {
    login,
    verifyMessage,
    goBack
}