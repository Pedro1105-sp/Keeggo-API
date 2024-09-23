Feature: Alterar Produto

    Como usuário quero alterar produto na aplicação utilizando API

Scenario: CT003 - ALTERAR PRODUTO

Given que acesso a aplicação como administrador
Given que altero um produto
Then o sistema exibe o status 200

Scenario: CT004 - VERIFICAR ID DA NOVA IMAGEM ALTERADA DO PRODUTO

Given que altero um produto
Then verifico se o id da imagem alterada é atualizada