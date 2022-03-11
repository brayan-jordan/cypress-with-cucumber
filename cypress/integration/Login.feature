Feature: Login site CWI

    Scenario: Visualizar opção de recuperar senha esquecida
        Given acesso o site da alura
        When acesso a pagina de matricula
        Then acesso a tela de cursos de programacao
        Then clicar botao conheca cursos

    # Comandos do BDD (Behavior-driven development ou Desenvolvimento Orientado a Comportamento)
    # Given -- Dado que
    # When -- Quando
    # Then -- Então 