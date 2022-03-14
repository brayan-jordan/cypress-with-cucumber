Feature: Mostrar o toast de documento não encontrado caso envie um ID inválido

    Scenario: Entrar na aplicação, enviar um id inválido e verificar se apareceu o Toast
        Given Acesso ao site da aplicação DOC-e 
        When Digite o ID de um documento inválido e envie a requisição
        Then Busque pelo texto contido no toast que deveria aparecer