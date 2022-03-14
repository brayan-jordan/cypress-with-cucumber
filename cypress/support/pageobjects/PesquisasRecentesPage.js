import PesquisasRecentesElements from '../elements/PesquisasRecentesElements.js'
const pesquisasRecentesElements = new PesquisasRecentesElements
const url = Cypress.config("baseUrl")
require('cypress-xpath')

class PesquisasRecentesPage {
    acessarSite() {
        cy.visit(url)
    }

    abreAsConfigurações() {
        cy.xpath(pesquisasRecentesElements.botaoConfig()).click()
    }

    editaAsFlagsParaFalse() {
        cy.xpath(pesquisasRecentesElements.botaoEditarUseBlufftonLayout()).click()
        cy.xpath(pesquisasRecentesElements.inputUseBlufftonLayour()).clear().type('false{enter}')
        cy.xpath(pesquisasRecentesElements.botaoEditarHideRecentSearch()).click()
        cy.xpath(pesquisasRecentesElements.inputHideRecentSearch()).clear().type('false{enter}')
        cy.xpath(pesquisasRecentesElements.botaoFecharConfig()).click()
    }

    verificaLimpaInput() {
        cy.xpath(pesquisasRecentesElements.inputOrdemProducaoMaterial()).clear()
    }

    inserirIdValido() {
        cy.xpath(pesquisasRecentesElements.inputOrdemProducaoMaterial()).type('12000240{enter}')
    }

    selecionaOPrimeiroDocumento() {
        cy.xpath(pesquisasRecentesElements.primeiraOpcaoDocumento()).click()
    }

    voltaParaHome() {
        cy.xpath(pesquisasRecentesElements.botaoHome()).click()
    }

    secionaPrimeiraOpcaoRecente() {
        cy.xpath(pesquisasRecentesElements.primeiraOpcaoRecentSearchs()).click()
    }

    /* selecionaPrimeiroDocumento() {
        cy.xpath(pesquisasRecentesElements.primeiraOpcaoDocumento()).click()
    } */
}

export default PesquisasRecentesPage;