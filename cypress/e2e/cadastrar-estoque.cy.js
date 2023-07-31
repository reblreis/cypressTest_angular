import { faker } from "@faker-js/faker"; 

//variáveis do teste (autenticação) 
const username = 'sergio.coti@gmail.com'; 
const password = '@Admin123'; 

//variáveis do teste (cadastro do estoque) 
const nome = faker.commerce.productName(); 
const descricao = faker.commerce.productDescription(); 

describe('template spec', () => { 
    it('passes', () => { 
        
        //autenticar o usuário 
        cy.visit('http://apiestoquecoti-001-site1.gtempurl.com/account/login'); 
        cy.get('input[formcontrolname="username"]')
                    .type(username, { force: true }); 
        cy.get('input[formcontrolname="password"]') 
                    .type(password, { force: true }); 
        cy.get('form').submit(); 
        cy.wait(5000); 
        
        //realizando o cadastro de um estoque 
        cy.visit('http://apiestoquecoti-001-site1.gtempurl.com/admin/estoque-cadastro'); 
        cy.get('input[formcontrolname="nome"]').type(nome, { force: true }); 
        cy.get('textarea').type(descricao, { force: true }); 
        cy.get('form').submit(); cy.wait(5000);

        //capturando o elemento que exibe a mensagem 
        cy.get(".message").then((element) => { 
            
            //comparando o resultado obtido com o resultado esperado 
            expect(element.text()).to.contains("cadastrado com sucesso."); }); 
            
            //gerando evidência de teste 
            cy.screenshot("cadastrar-estoque (1) cadastro realizado com sucesso", { 
                overwrite: true, 
            });

        }) 
    })