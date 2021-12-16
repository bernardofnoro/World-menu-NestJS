# API REST com NestJS, Prisma e PostgreSQL

**NestJS** é um framework que nos ajuda a escalar de forma eficiente as aplicações construídas em cima do **Node.js**. Possui suporte para **JavaScript** e também **TypeScript**.

Para entendermos como o Nest estrutura e constrói as coisas, uma revisão no assunto de **orientação a objetos** será bastante importante.

O Nest possui diversas semelhanças com o **Express** justamente por ter sido construído em cima dele. Em essência, continuaremos a construir uma API.

## Ferramentas Utilizadas

- VS Code
- Node.js: versão 16.13.0
- NestJs: versão 8.1.6
- Prisma: versão 8.1.0

## Escopo de Roteamento

**Todas as rotas estão sendo executadas em:** `localhost:10000/api/v1/`

`GET` /api/v1/cuisines

`GET` /api/v1/cuisines/:id

`PUT` /api/v1/cuisines/:id

`PATCH` /api/v1/cuisines/:id

`DELETE` /api/v1/cuisines/:id

Em **Cuisines** cuidamos das informações a respeito do país de origem do prato/receita.

-----

`GET` /api/v1/ingredients

`GET` /api/v1/ingredients/:id

`POST` /api/v1/ingredients

`PUT` /api/v1/ingredients/:id

`PATCH` /api/v1/ingredients/:id

`DELETE` /api/v1/ingredients/:id

Em **Ingredients** cuidamos das informações a respeito dos ingredientes que irão nas receitas/pratos.

-------

`GET` /api/v1/gauges

`GET` /api/v1/gauges/:id

`POST` /api/v1/gauges

`PUT` /api/v1/gauges/:id

`PATCH` /api/v1/ingredients/:id

`DELETE` /api/v1/ingredients/:id

Em **Gauges** cuidamos das informações a respeito dos pesos e medidas utilizados para mensurar a confecção de temperos e preparo de ingredientes.

------

`GET` /api/v1/recipes

`GET` /api/v1/recipes/:id

`POST` /api/v1/recipes

`PUT` /api/v1/recipes/:id

`PATCH` /api/v1/recipes/:id

`DELETE` /api/v1/recipes/:id

Em **Recipes** cuidamos das informações a respeito dos pesos e medidas utilizados para mensurar a confecção de temperos e preparo de ingredientes.

## Relação Um pra Um

## Relação Um pra Muitos

## Relação Muitos pra Muitos

