# API RESTful_MeuClosetTem

API desenvolvida com a tecnologia NodeJs


## Descrição
Projeto de conclusão do curso [{Reprograma}] turma de Back-end 2020 -Saiba mais em: (https://reprograma.com.br/). 

###Proposta do projeto final 
Construção de uma API de tema livre, capaz e executar um CRUD, contendo as quatro operações básicas usadas em Banco de Dados NoSQL - Create (Criar), Read (Consultar), Update (Atualizar) e Delete (Excluir), com deploy efetuado na plataforma Heroku. 

## Finalidade do projeto MeuClosetTem_API
>Adepta da ações e engajamentos sobre sustentabilidade desde 2014, tive a oportunidade nesta trajetória de conhecer e me engajar ativamente em ações de promoção à moda sustentável no ano de 2018 no território nacional. 
>A indútria da moda está entre as mais poluentes do mundo e eventos como o Rio Ethical Fashion trazem a tona debates e reflexões necessários a todos nós para que possamos nos conscientizar e repensarmos nossa forma de consumo, bem como, dar apoio a ações que atuem nesta mudança de contexto. 
>
>Segundo o relatório de inteligência do Serviço de Apoio às Micro e Pequenas Empresas(Sebrae), o número de brechós no Brasil aumentou em 210% somente entre 2010 e 2015, . 
>
>O intuito da da ferramenta desenvolvida é empoderar microeemprendedoras, bem como, pequenas e médias empresas na promoção de moda sustentável através da internet para o empreendimentos locais, viusando a captação de público alvo e despertando novos consumidores para esta concientização.

## Solução da Hub Fight's
Objetivos: 
- Cadastro de estabelecimentos de atuação em moda sustentável.
- Fortalecimento de pequenos empreendedores no setor comercial. 
- Promoção de uma consciência sustentável
-Captação de público alvo para o comércio de moda sustentável. 
- Captação de apoiadores.


## Tecnologias utilizadas

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/) - Linguagem de programação
- [Node.js](https://nodejs.org/en/) - Ambiente de execução
- [Git/Github](https://github.com/) - Plataforma de hospedagem do código fonte
- [heroku](https://dashboard.heroku.com/apps) - Plataforma Cloud para deploy
- [MongoDB](https://www.mongodb.com/) - Banco de Dados NoSQL 
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/) - Banco de Dados em nuvem
- [Express](https://expressjs.com/pt-br/) - Framework, gerenciador de requisções
Outras Ferramentas
- [Nodemon](https://nodemon.io/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)

## Arquitetura

        Arquitetura MVC
        |
        \--?? **HUB-FIGHTS**
            | ?? README.md
            | ?? .env
            | ?? .gitignore
            | ?? package-lock.json
            | ?? package.json
            | ?? **server.js**  
            \--?? node_modules
            \--?? assets
            \--??src
                | ??**app.js**
                ??---data
                |   ?? **database.js
                ??---controllers
                |   ?? **crowdfundingController.js
                |   ??  eventController.js
                |   ??  fighterController.js
                |   ??  promoterController.js**
                ??---models
                |   ??  **crowdfundingSchema.js
                |   ??  eventoSchema.js
                |   ??  fighterSchema.js
                |   ??  promoterSchema.js**
                ??---routes
                |   ??  **crowdfundingoutes.js
                |   ??  eventRoutes.js
                |   ??  fighterRoutes.js
                |   ??  promoterRoutes.js**
                |__ ??  index.js**

## Fluxo do consumo da API

![assets/fluxograma.png](assets/fluxograma.png)

## Rotas + Contrato
Essa API deve ter as seguintes rotas:

![assets/rotas.png](assets/rotas.png)

#### Links

* local: http://localhost:555
* Heroku: https://hub-fights.herokuapp.com/

