/// <reference types="cypress" />

describe('Busca de Produto', () => {

    beforeEach(() => {
        //Acessar site amazon.com
        cy.visit('/')
    })

    it('Validar busca de produto no site da amazon.com', () => {

        //Digitar critério da busca
        cy.digitarProduto()

        //Clicar no botão para fazer a pesquisa
        cy.clicarEnter()

        //Validar retorno da busca
        cy.retornoBusca()

        //Clicar no produto
        cy.clicarProduto()

        //Validar título do produto
        cy.tituloProduto()

        //Validar preço do produto
        cy.precoProduto()

        //Validar detalhes do produto
        cy.detalheProduto()

    })
})