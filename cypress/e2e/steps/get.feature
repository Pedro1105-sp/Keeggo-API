Feature: Buscar Produto

    Como usuário quero buscar produto na aplicação utilizando API

Scenario: CT001 - VERIFICAR SE EXIBE PRODUTOS INEXISTENTE BUSCA

Given que realizo uma busca informando produto inexistente
Then o sistema exibe o status 200

Scenario: CT002 - VERIFICAR SE EXIBE PRODUTOS BUSCADO "LAPTOP"

Given que realizo uma busca informando produto o laptop
Then o sistema exibe o status 200