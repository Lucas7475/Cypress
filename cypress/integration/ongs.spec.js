/// <reference types="cypress"/>

import Logon from '../support/pages/Logon';
import Register from '../support/pages/Register';
import Profile from '../support/pages/Profile';
import NewIncident from '../support/pages/NewIncident';

// comando que agrupa um conjunto de testes
describe('Ongs', () =>{

    it('Teste de acesso', ()=>{
        cy.visit('https://br-playground.digitalhouse.com/login',{timeout:10000});
        cy.get('.auth-page__card').click({timeout:10000});
        cy.get('[data-testid=emailInput]').click({timeout:10000});
        cy.get('[data-testid=emailInput]').type('emial@email');
        cy.get('[data-testid=pwInput]').type('123456');
        cy.get('[data-testid=submitButton]').click();
        cy.get('form').submit();
        cy.get('.message-box__message').click();
    })

    //comando que inicia um teste
    // it('devem poder realizar um cadastro',()=>{
    //     Register.acessarCadastro();
    //     Register.preencherCadastro();
    //     Register.validarCadastroDeOngComSucesso();
    // });

    // it('devem poder realizar um login no sistema',() =>{
    //     Logon.acessarLogin();
    //     Logon.preencherLogin();
    // });

    // it('devem poder fazer logout',()=>{
    //     cy.login();
    //     Profile.clicarNoBotaoDeLogout();
    // });

    // it('devem poder cadastrar novos casos',()=>{
    //     cy.login();
    //     Profile.clicarNoBotaoNovosCasos();
    //     NewIncident.preencherCadastroDeCaso();
    //     NewIncident.validarCadastroDeCaso();
    // });

    // it('devem poder excluir um caso',()=>{
    //     cy.createNewIncident();
    //     cy.login();
    //     Profile.clicarNoBotaoExcluirCaso();
    //     Profile.validarExclusaoDeCasoComSucesso();
    // });
})

// npx cypress run --env allure=true
// comando para rodar os testes em segundo plano e gera relatorio usando o allure