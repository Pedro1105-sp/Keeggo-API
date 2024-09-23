import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import alterar from '../../pages/putP';


Given("que acesso a aplicação como administrador", ()=>{
    alterar.Login();
});

Given("que altero um produto", ()=>{
   alterar.alterarProduto();
});

Then("o sistema exibe o status 200", ()=>{
    alterar.alterarProduto();
});


Then("verifico se o id da imagem alterada é atualizada", ()=>{
    alterar.alterarProduto();
});