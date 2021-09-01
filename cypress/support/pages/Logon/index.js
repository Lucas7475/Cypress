// ações de interação com a pagina

const el = require('./elements').ELEMENTS;

class Logon {
    acessarLogin(){
        cy.visit('http://localhost:3000/');
    }

    preencherLogin(){
        cy.get(el.id).type(Cypress.env('createOngId'));
        cy.get(el.buttonLogin).click();
    }
}

export default new Logon();