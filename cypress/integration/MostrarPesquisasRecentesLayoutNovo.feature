Feature: Mostrar Pesquisas Recentes do DOC-E utilizando o novo Layout

    Scenario: Entrar na aplicação, setar as configurações 
        Given Acesso ao site da aplicação DOC-e 
        When Acesso as configurações da aplicação 
        Then Muda as opções hide_recent_search para FALSE e use_bluffton_layout para TRUE e confirma
        
    Scenario: Fazer uma pesquisa com um ID de um documento válido para adicionar informações as pesquisas recentes
        Given O campo input está vazio
        When Digito o ID de um documento válido e envie a requisição
        Then Selecione o primeiro documento do mesmo

    Scenario: Retornar a home e tentar acessar um documento através da pesquisa recente
        Given Retornado a página inicial através do botão Home
        When Busco a primeira opção do pesquisa recente layout novo
        Then Seleciono um documento dos disponíveis