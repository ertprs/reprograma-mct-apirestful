# API RESTful_MeuClosetTem

API desenvolvida com a tecnologia NodeJs


## Descri��o
Projeto de conclus�o do curso [{Reprograma}] turma de Back-end 2020 -Saiba mais em: (https://reprograma.com.br/). 

###Proposta do projeto final 
Constru��o de uma API de tema livre, capaz e executar um CRUD, contendo as quatro opera��es b�sicas usadas em Banco de Dados NoSQL - Create (Criar), Read (Consultar), Update (Atualizar) e Delete (Excluir), com deploy efetuado na plataforma Heroku. 

## Finalidade do projeto MeuClosetTem_API
>Adepta da a��es e engajamentos sobre sustentabilidade desde 2014, tive a oportunidade nesta trajet�ria de conhecer e me engajar ativamente em a��es de promo��o � moda sustent�vel no ano de 2018 no territ�rio nacional. 
>A ind�tria da moda est� entre as mais poluentes do mundo e eventos como o Rio Ethical Fashion trazem a tona debates e reflex�es necess�rios a todos n�s para que possamos nos conscientizar e repensarmos nossa forma de consumo, bem como, dar apoio a a��es que atuem nesta mudan�a de contexto. 
>
>Segundo o relat�rio de intelig�ncia do Servi�o de Apoio �s Micro e Pequenas Empresas(Sebrae), o n�mero de brech�s no Brasil aumentou em 210% somente entre 2010 e 2015, . 
>
>O intuito da da ferramenta desenvolvida � empoderar microeemprendedoras, bem como, pequenas e m�dias empresas na promo��o de moda sustent�vel atrav�s da internet para o empreendimentos locais, viusando a capta��o de p�blico alvo e despertando novos consumidores para esta concientiza��o.

## Solu��o da Hub Fight's
Objetivos: 
- Cadastro de estabelecimentos de atua��o em moda sustent�vel.
- Fortalecimento de pequenos empreendedores no setor comercial. 
- Promo��o de uma consci�ncia sustent�vel
-Capta��o de p�blico alvo para o com�rcio de moda sustent�vel. 
- Capta��o de apoiadores.


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
        \--📂 **HUB-FIGHTS**
            | 📄 README.md
            | 📄 .env
            | 📄 .gitignore
            | 📄 package-lock.json
            | 📄 package.json
            | 📄 **server.js**  
            \--📂 node_modules
            \--📂 assets
            \--📂src
                | 📄**app.js**
                📂---data
                |   📄 **database.js
                📂---controllers
                |   📄 **crowdfundingController.js
                |   📄  eventController.js
                |   📄  fighterController.js
                |   📄  promoterController.js**
                📂---models
                |   📄  **crowdfundingSchema.js
                |   📄  eventoSchema.js
                |   📄  fighterSchema.js
                |   📄  promoterSchema.js**
                📂---routes
                |   📄  **crowdfundingoutes.js
                |   📄  eventRoutes.js
                |   📄  fighterRoutes.js
                |   📄  promoterRoutes.js**
                |__ 📄  index.js**

## Fluxo do consumo da API

![assets/fluxograma.png](assets/fluxograma.png)

## Rotas + Contrato
Essa API deve ter as seguintes rotas:

![assets/rotas.png](assets/rotas.png)

#### Links

* local: http://localhost:3000
* Heroku: https://api-mct.herokuapp.com/
## Nota importante
Escreve algo sobre o seu desenvolvimento no curso


### Tassila Bomfim
[Linkedin]https://www.linkedin.com/in/laismaas//)

