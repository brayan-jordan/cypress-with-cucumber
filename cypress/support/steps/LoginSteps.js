/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site da alura", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de matricula", () => {
    loginPage.clicarBotaoMatriculese();
})

Then("acesso a tela de cursos de programacao", () => {
    loginPage.clicarBotaoProgramacao();
}) 

Then("clicar botao conheca cursos", () => {
    loginPage.clicarBotaoConhecaCursos();
})