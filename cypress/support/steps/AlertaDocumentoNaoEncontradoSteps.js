/* global Given, Then, When */

import PesquisasRecentesPage from '../pageobjects/PesquisasRecentesPage'
const pesquisasRecentesPage = new PesquisasRecentesPage

When("Digite o ID de um documento inválido e envie a requisição", () => {
    pesquisasRecentesPage.inserirIdInvalido()
})

Then("Busque pelo texto contido no toast que deveria aparecer", () => {
    pesquisasRecentesPage.verificarSeApareceuOToast()
})

