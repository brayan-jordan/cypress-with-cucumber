/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = 'https://alura.com.br'
require('cypress-xpath')

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoMatriculese() {
        cy.get(loginElements.botaoMatriculese()).click()
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    clicarBotaoProgramacao() {
        cy.xpath(loginElements.botaoProgramacao()).click()
    } 

    clicarBotaoConhecaCursos() {
        cy.xpath(loginElements.botaoConhecaCursos()).click()
    }
}

export default LoginPage;