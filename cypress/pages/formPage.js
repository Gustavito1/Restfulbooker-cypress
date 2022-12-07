// const { camelCase } = require("cypress/types/lodash");

class FormPage{
    elements = {
        firstNameInput: () => cy.get('#userName'),
        lastNameInput: () => cy.get('#lastName'),
        email: () => cy.get('#userEmail')
    }

    typeFirstName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    typeNameInput(password){
        this.elements.lastNameInput().type(password);
    }

    typeEmailInput(email){
        this.elements.emailInput().type(email);
    }
}

module.exports = new FormPage();