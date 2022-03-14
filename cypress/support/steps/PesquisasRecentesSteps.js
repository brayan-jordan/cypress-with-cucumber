/* global Given, Then, When */

import PesquisasRecentesPage from '../pageobjects/PesquisasRecentesPage'
const pesquisasRecentesPage = new PesquisasRecentesPage

Given("Acesso ao site da aplicação DOC-e", () => {
    pesquisasRecentesPage.acessarSite()
})

When("Acesso as configurações da aplicação", () => {
    pesquisasRecentesPage.abreAsConfigurações()
})

Then("Muda as opções hide_recent_search e use_bluffton_layout para FALSE e confirma", () => {
    pesquisasRecentesPage.editaAsFlagsParaFalse()
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

When("Busco a primeira opção do pesquisa recente", () => {
    pesquisasRecentesPage.secionaPrimeiraOpcaoRecente()
})

Then("Seleciono um documento dos disponíveis", () => {
    pesquisasRecentesPage.selecionaOPrimeiroDocumento()
})