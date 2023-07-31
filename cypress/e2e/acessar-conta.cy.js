//variáveis do teste 
const username = 'sergio.coti@gmail.com'; 
const password = '@Admin123';

describe('template spec', () => {
  it('passes', () => {

    //abrindo o endereço da pa´gina
    cy.visit('http://apiestoquecoti-001-site1.gtempurl.com/account/login')

    //preencher o campo de email do usuário 
    cy.get('input[formcontrolname="username"]') 
      .type(username, { force: true }); 
      
      //preencher o campo de senha do usuário 
      cy.get('input[formcontrolname="password"]') 
        .type(password, { force: true }); 
        
      //executar o submit do formulário 
      cy.get('form').submit(); 
      
      //aguardar 5 segundos 
      cy.wait(5000); //milésimos
      
      //definindo um critério para o teste passar 
      cy.url().should('include', '/admin/dashboard'); 

    }) 
  })

