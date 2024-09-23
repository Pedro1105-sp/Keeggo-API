class buscar{
    AcessarApi(){
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=teste'
        })
    }

    BuscarProduto(){
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=laptop'
        })

        .then((resultado)=>{
            resultado.body.forEach((produtos)=>{
                expect(produtos).to.have.property('categoryId')
                expect(produtos).to.have.property('categoryName')
                expect(produtos).to.have.property('categoryImageId')
                expect(produtos).to.have.property('products')
            })
        })
    }

    StatusRetorno(){
        (resultado)=>{
            expect(resultado.status).to.equal(200)
        }
    }

}

export default new buscar();