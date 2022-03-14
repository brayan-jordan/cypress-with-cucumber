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
        // cy.xpath busca os elementos através do seu xpath, porém também é possivel pegar de várias outras maneiras os elementos
        // desejados por exemplo utilizando o cy.get('') com os parametros (.classname, @id=xxx)
        cy.xpath(pesquisasRecentesElements.botaoConfig()).click()
    }

    editarFlags(arg1, arg2) {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.botaoEditarUseBlufftonLayout()).click()
        cy.xpath(pesquisasRecentesElements.inputUseBlufftonLayour()).clear().type(`${arg1}{enter}`)
        cy.xpath(pesquisasRecentesElements.botaoEditarHideRecentSearch()).click()
        cy.xpath(pesquisasRecentesElements.inputHideRecentSearch()).clear().type(`${arg2}{enter}`)
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

    secionaPrimeiraOpcaoRecenteLayoutAntigo() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.primeiraOpcaoRecentSearchs()).click()
    }

    selecionaPrimeiraOpcaoRecenteLayoutNovo() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.primeiraOpcaoRecentSearchsNovoLayout()).click()
    }

    inserirIdInvalido() {
        cy.wait(1000)
        cy.xpath(pesquisasRecentesElements.inputOrdemProducaoMaterial()).type('998899889988{enter}')
    }

    verificarSeApareceuOToast() {
        cy.wait(1000)
        // Contains vai procurar algum elemento na tela que contenha o texto
        // especificado, caso nao encontre então o teste vai dar erro e alegar na hora do plano de testes
        cy.contains('Nenhum documento encontrado.')
    }
}

export default PesquisasRecentesPage;