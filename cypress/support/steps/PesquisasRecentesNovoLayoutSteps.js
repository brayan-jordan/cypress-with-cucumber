/* global Given, Then, When */

import PesquisasRecentesPage from '../pageobjects/PesquisasRecentesPage'
const pesquisasRecentesPage = new PesquisasRecentesPage

// Como os demais métodos da feature já estão instânciados globalmentes no outro arquivo de Steps e executam as mesmas funcionalidades
// não tem necessidade de declarar suas funcionalidades nesse

Then("Muda as opções hide_recent_search para FALSE e use_bluffton_layout para TRUE e confirma", () => {
    pesquisasRecentesPage.editarFlags(true, false)
})

When("Busco a primeira opção do pesquisa recente layout novo", () => {
    pesquisasRecentesPage.selecionaPrimeiraOpcaoRecenteLayoutNovo()
})

