/// <reference types="cypress"/>

import Logon from '../support/pages/Logon';
import Register from '../support/pages/Register';
import Profile from '../support/pages/Profile';
import NewIncident from '../support/pages/NewIncident';

// comando que agrupa um conjunto de testes
describe('Ongs', () =>{
    //comando que inicia um teste
    it('devem poder realizar um cadastro',()=>{
        Register.acessarCadastro();
        Register.preencherCadastro();
        Register.validarCadastroDeOngComSucesso();
    });

    it('devem poder realizar um login no sistema',() =>{
        Logon.acessarLogin();
        Logon.preencherLogin();
    });

    it('devem poder fazer logout',()=>{
        cy.login();
        Profile.clicarNoBotaoDeLogout();
    });

    it('devem poder cadastrar novos casos',()=>{
        cy.login();
        Profile.clicarNoBotaoNovosCasos();
        NewIncident.preencherCadastroDeCaso();
        NewIncident.validarCadastroDeCaso();
    });

    it('devem poder excluir um caso',()=>{
        cy.createNewIncident();
        cy.login();
        Profile.clicarNoBotaoExcluirCaso();
        Profile.validarExclusaoDeCasoComSucesso();
    });
})

// npx cypress run --env allure=true
// comando para rodar os testes em segundo plano e gera relatorio usando o allure