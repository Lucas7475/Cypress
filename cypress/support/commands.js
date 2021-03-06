// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('createOng', () =>{
    cy.request({
        method:'POST',
        url:'http://localhost:3333/ongs',
        body:{
            name:'Gatos queridos',
            email:'gatos@email.com',
            whatsapp:'11999999999',
            city:'São Paulo',
            uf:'SP'
        }
    }).then(response =>{
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        Cypress.env('createOngId', response.body.id);
    })
})

Cypress.Commands.add('createNewIncident', () =>{
    cy.request({
        method:'POST',
        url:'http://localhost:3333/incidents',
        headers:{ 'Authorization':`${Cypress.env('createOngId')}` },
        body:{
            title:'Animal abandonado',
            description:'Animal precisa de apoio para ter uma moradia.',
            value:'210'
        }
    }).then(response =>{
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        Cypress.env('createIncidentId', response.body.id);
    })
})

Cypress.Commands.add('login', () =>{
    cy.visit('http://localhost:3000/profile', {
        onBeforeLoad: (browser) => {
            browser.localStorage.setItem('ongId',Cypress.env('createOngId'));
            browser.localStorage.setItem('ongName', 'Gatos queridos');
        }
    });
})