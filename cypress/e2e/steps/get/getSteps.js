import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import buscar from '../../pages/getP';

Given("que realizo uma busca informando produto inexistente", ()=>{
    buscar.AcessarApi();
});

Then("o sistema exibe o status 200",() =>{
    buscar.StatusRetorno();
});


Given("que realizo uma busca informando produto o laptop", ()=>{
    buscar.BuscarProduto();
});

Then("o sistema exibe o status 200",() =>{
    buscar.StatusRetorno();
});