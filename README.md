# API RESTful_MeuClosetTem

API desenvolvida com a tecnologia NodeJs


<h3>Descrição</h3>
<p>Projeto de conclusão do curso [{Reprograma}] turma de Back-end 2020 -Saiba mais em: (https://reprograma.com.br/).</p>

###Proposta do projeto final 
Construção de uma API de tema livre, capaz e executar um CRUD, que contemple as quatro operações básicas usuais em Banco de Dados NoSQL - Create (Criar), Read (Consultar), Update (Atualizar) e Delete (Excluir), com deploy efetuado na plataforma Heroku. 

## Finalidade do projeto MeuClosetTem_API
>Adepta da ações e engajamentos em eventos sobre sustentabilidade desde 2014, tive a oportunidade nesta trajetória de conhecer e me engajar ativamente em ações de promoção a moda sustentável no ano de 2018 no território nacional. 
>A indútria da moda está entre as mais poluentes do mundo e eventos como o Rio Ethical Fashion trazem a tona debates e reflexões necessárias a todos nós para que possamos nos conscientizar e repensarmos nossa forma de consumo, bem como, dar apoio a ações que atuem nesta mudança de contexto. 
>
>Segundo o relatório de inteligência do Serviço de Apoio as Micro e Pequenas Empresas(Sebrae), o número de brechós no Brasil aumentou em 210% somente entre 2010 e 2015, . 
>
>O intuito da ferramenta desenvolvida é empoderar e dar forlatração no processo de digitalização de microeemprendedoras, bem como, pequenas e médias empresas com a divulgação e promoção dos estabelecimentos de moda sustentável através da internet, viusando a captação de público alvo, despertando novos consumidores para esta concientização e para futuros estudos pioneiro em comportamento de consumo em moda sustentável.

## Solução da MeuClosetTem
Objetivos: 
- Cadastro de estabelecimentos de atuação em moda sustentável.
- Fortalecimento de pequenos empreendedores no setor comercial. 
- Promoção e conscientização de consumo sustentável.
-Captação de público alvo para o comércio local de moda sustentável. 
- Captação de apoiadores da causa.
-Desenvolvimento de futuros estudos sobre comportamento de consumo em moda sustentável. 


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



* local: http://localhost:3000
* Heroku: https://api-mct.herokuapp.com/


### Laís Lopes
[Linkedin]https://www.linkedin.com/in/laismaas//)

