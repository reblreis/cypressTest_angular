import { Faker, pt_BR } from "@faker-js/faker";

//configurando o idioma da biblioteca faker 
export const faker = new Faker({ 
  locale: [pt_BR], 
});

//criando as variáveis do teste 
const username = faker.internet.email(); 
const password = `${faker.internet.password()}@123`;

describe('template spec', () => { 
  it('passes', () => { 
    
    //acessar a página de login de usuários do sistema 
    cy.visit('http://apiestoquecoti-001-site1.gtempurl.com/account/login'); 
    
    //preencher o campo email 
    cy.get('input[formcontrolname="username"]').type(username, { force: true }); 
    
    //preencher o campo senha 
    cy.get('input[formcontrolname="password"]').type(password, { force: true });

    //gerando evidência de teste 
    cy.screenshot("acesso-negado (1) preenchimento dos campos", { 
      overwrite: true, 
    });

    //executar o SUBMIT do formulário 
    cy.get('form').submit(); 
    
    //aguardar 5 segundos 
    cy.wait(5000);

    //capturando o elemento que exibe a mensagem 
    cy.get(".message").then((element) => { 
      //comparando o resultado obtido com o resultado esperado 
      expect(element.text()).to.contains ("Acesso negado. Usuário inválido."); 
    }); 
    
    //gerando evidência de teste 
    cy.screenshot("acesso-negado (2) usuário inválido", { 
      overwrite: true, 
    }); 
  }); 
});