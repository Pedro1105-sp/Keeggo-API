let authToken=null;

class alterar{
    Login(){
        cy.request({
            method: 'POST', 
            url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login', 
            headers:{
                'Content-Type': 'application/json'
            },
            body:{
                email: "string.com",
                loginPassword: "String123",
                loginUser: "string3"
            }            
        }).then((response)=>{
            authToken=response.body.token;
        })
    }

    alterarProduto(){
        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/807233898/ariel/pink',
            path: "807233898/ariel/pink",
            qs: { 
                'product_id': '1'
            },
            headers:{
                 accept: "*/*",
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' +authToken 
            },
            body: {
                FormData: '../../../fixtures/URUS.jpg'
            }
        }).then((resultado)=>{
            expect(resultado.status).to.equal(200);
            expect(resultado.body).have.property('imageId')
        })
    }


}




export default new alterar();