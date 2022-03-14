/* global Given, Then, When */

import PesquisasRecentesPage from '../pageobjects/PesquisasRecentesPage'
const pesquisasRecentesPage = new PesquisasRecentesPage


// Instanciando os métodos do Cucumber e declarando a função que cada um precisa executar do Cypress para realizar
// o teste e dar o mesmo como certo ou errado
Given("Acesso ao site da aplicação DOC-e", () => {
    pesquisasRecentesPage.acessarSite()
})

When("Acesso as configurações da aplicação", () => {
    pesquisasRecentesPage.abreAsConfigurações()
})

Then("Muda as opções hide_recent_search para FALSE e use_bluffton_layout para TRUE e confirma", () => {
    pesquisasRecentesPage.editarFlags(true, false)
})

Given("O campo input está vazio", () => {
    pesquisasRecentesPage.verificaLimpaInput()
})

When("Digito o ID de um documento válido e envie a requisição", () => {
    pesquisasRecentesPage.inserirIdValido()
})

Then("Selecione o primeiro documento do mesmo", () => {
    pesquisasRecentesPage.selecionaOPrimeiroDocumento()
})

Given("Retornado a página inicial através do botão Home", () => {
    pesquisasRecentesPage.voltaParaHome()
})

When("Busco a primeira opção do pesquisa recente layout novo", () => {
    pesquisasRecentesPage.selecionaPrimeiraOpcaoRecenteLayoutNovo()
})

Then("Seleciono um documento dos disponíveis", () => {
    pesquisasRecentesPage.selecionaOPrimeiroDocumento()
})