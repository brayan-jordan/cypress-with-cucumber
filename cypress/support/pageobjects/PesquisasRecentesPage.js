import PesquisasRecentesElements from '../elements/PesquisasRecentesElements.js'
const pesquisasRecentesElements = new PesquisasRecentesElements
const url = Cypress.config("baseUrl")
require('cypress-xpath')

// Aqui contará tudo que será executado em determinado plano de teste e todas as funcionalidades do Cypress podem ser utilizadas
class PesquisasRecentesPage {
    acessarSite() {
        cy.wait(1000)
        cy.visit(url)
    }

    abreAsConfigurações() {
        cy.wait(1000)
        // cy.xpath busca os elementos através do seu xpath, caso for buscar um elemento por ID utiliza o .get(.idDoElemento)
        cy.xpath(pesquisasRecentesElements.botaoConfig()).click()
    }

    editaAsFlagsParaFalse() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.botaoEditarUseBlufftonLayout()).click()
        cy.xpath(pesquisasRecentesElements.inputUseBlufftonLayour()).clear().type('false{enter}')
        cy.xpath(pesquisasRecentesElements.botaoEditarHideRecentSearch()).click()
        cy.xpath(pesquisasRecentesElements.inputHideRecentSearch()).clear().type('false{enter}')
        cy.xpath(pesquisasRecentesElements.botaoFecharConfig()).click()
    }

    verificaLimpaInput() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.inputOrdemProducaoMaterial()).clear()
    }

    inserirIdValido() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.inputOrdemProducaoMaterial()).type('12000240{enter}')
    }

    selecionaOPrimeiroDocumento() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.primeiraOpcaoDocumento()).click()
    }

    voltaParaHome() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.botaoHome()).click()
    }

    secionaPrimeiraOpcaoRecente() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.primeiraOpcaoRecentSearchs()).click()
    }
}

export default PesquisasRecentesPage;