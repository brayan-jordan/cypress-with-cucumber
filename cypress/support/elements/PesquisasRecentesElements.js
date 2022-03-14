class PesquisasRecentesElements {
    // Contém todos os elementos que vão precisar ser acessados por um plano de teste, pode ser utilizado somente o ID
    // ao invés de passar o XPATH do elemento inteiro

    botaoConfig = () => { 
        return '//*[@id="body"]/nav/div/div[1]/a' 
    }

    botaoEditarUseBlufftonLayout = () => {
        return '//*[@id="modal-information"]/div/div/div[2]/table/tbody/tr[14]/td[4]/div/button[1]'
    }

    inputUseBlufftonLayour = () => {
        return '//*[@id="modal-information"]/div/div/div[2]/table/tbody/tr[14]/td[3]/input'
    }

    botaoEditarHideRecentSearch = () => {
        return '//*[@id="modal-information"]/div/div/div[2]/table/tbody/tr[15]/td[4]/div/button[1]'
    }

    inputHideRecentSearch = () => {
        return '//*[@id="modal-information"]/div/div/div[2]/table/tbody/tr[15]/td[3]/input'
    }

    botaoFecharConfig = () => {
        return '//*[@id="modal-information"]/div/div/div[3]/button[3]'
    }

    inputOrdemProducaoMaterial = () => {
        return '//*[@id="input-order-id"]'
    }

    primeiraOpcaoDocumento = () => {
        return '//*[@id="modal-material"]/div/div/div[2]/div/div/button'
    }

    botaoHome = () => {
        return '//*[@id="navbar"]/ul/li[6]/a'
    }

    primeiraOpcaoRecentSearchs = () => {
        return '//*[@id="body"]/div[1]/div[1]/div[1]/ul/li'
    }

    primeiraOpcaoRecentSearchsNovoLayout = () => {
        return '//*[@id="cover"]/div/div[2]/div/div/div'
    }

    toastNaoEncontrado = () => {
        return '//*[@id="body"]/div[6]'
    }
}

export default PesquisasRecentesElements;