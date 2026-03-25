#Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
- O que é o Node.js?
- O que é o NPM?
- O que é o Express.js?
- Como mudar o formato de importação de "require" (padrão commonjs) para module?
- O que é HTTP?
- Quais os métodos de requisição HTTP e para que serve cada um deles?
- Para que serve o --watch ao rodar o servidor?
- Para que serve o Router do Express?
- O que é um padrão de projeto?
- O que é o padrão de projeto MVC?
- Qual a responsabilidade de cada camada?
- O que é um ORM?
- Quais as vantagens de utilizar um ORM?
- Como utilizarcoarâmetros de url?
O que é Middleware? (Exemplo logger)

--------------

- Validação de Dados
- Tratamento de Erros
- Autenticaçãoccom JWT


### comandos prisma

Instalação
- npm i prisma -D
- npm i dotenv -D 
para Mysql e Mariadb 
npm install @prisma/client @prisma/adapter-mariadb mariadb

Inicia o Prisma
npx prisma init --datasource-provider mysql --output ../generated/prisma

Gera as tabelas a partir do schema do prisma
- npx prisma db push

Gera o schema do prisma a partir do banco de dados
- npx prisma db pull

Gerar as funções para interagir com os modelos mapeados no schema
- npx prisma generate