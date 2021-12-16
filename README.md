# API REST com NestJS, Prisma e PostgreSQL

Por <a href="https://www.linkedin.com/in/bernardofnoro/">Bernardo Freitas</a> & <a href="https://www.linkedin.com/in/chanelym/">Chanely Marques</a>

**NestJS** é um framework que nos ajuda a escalar de forma eficiente as aplicações construídas em cima do **Node.js**. Possui suporte para **JavaScript** e também **TypeScript**.

Para entendermos como o Nest estrutura e constrói as coisas, uma revisão no assunto de **orientação a objetos** será bastante importante.

O Nest possui diversas semelhanças com o **Express** justamente por ter sido construído em cima dele. Em essência, continuaremos a construir uma API.

## Ferramentas Utilizadas

- VS Code
- Node.js: versão 16.13.0
- NestJs: versão 8.1.6
- Prisma: versão 8.1.0

## Setup Inicial - NestJS

> **Lembrete: :bangbang:** As instalações abaixo devem ser feitas dentro da pasta do seu projeto, aquela que criou com o comando `nest new nome-do-projeto` exceto o pacote @nestjs/cli

Para começarmos é necessário criar uma pasta para o projeto. Lembre-se que o nome da pasta não deve:

- Conter espaços, e;
- Caracteres especiais.

O nome da pasta deve com toda a certeza **indicar sobre o que o projeto se trata**. Lembre-se que ao programar não está somente consolidando um conhecimento para você, mas também ajudando outras pessoas no processo.

Após criada a pasta, **abra-a** dentro do VS Code.

Agora, vamos instalar um componente do Nest chamado **CLI**. No terminal em seu VS Code execute o seguinte comando.

```` 
npm i -g @nestjs/cli
````

Para nossos colegas usando Linux ou Mac, o comando de instalação deve acompanhar o **sudo**:

```
sudo npm i -g @nestjs/cli
```

Este comando utilizará o gerenciador de pacotes **npm** para instalar **globalmente** a Nest **CLI** na pasta do projeto.

Após a instalação, cheque se a instalação foi feita com sucesso através do comando:

```
nest -v
```

Se instalado corretamente, deverá aparecer em sua tela a **versão** do Nest instalada.

Indicando agora ao nest que queremos criar um novo projeto com sua estrutura, o seguinte comando no terminal nos ajudará:

``` 
nest new nome-do-projeto
```

No menu do VS Code podemos ver que diversos arquivos e uma estrutura de pastas foi criada.

Na pasta **src**, faça a remoção destes três arquivos:

- app.controller.spec.ts
- app.controller.ts
- app.service.ts

Na pasta **src**, crie a pasta **app** e coloque o arquivo **app.modulde.ts** dentro dela. A árvore de arquivos dentro da pasta do projeto deve estar como abaixo:

![image_05](C:\Users\Chanely\Documents\GitHub\understanding-NestJS-PostgreSQL\images\image_05.png)

Observe que temos alguns pontos em **vermelho**, indicando que algo de errado não está certo! Se abrirmos o arquivo `app.modules.ts` e na barra de opções clicarmos em **problemas**, veremos sobre o quê essas reclamações se tratam.

![image_06](C:\Users\Chanely\Documents\GitHub\understanding-NestJS-PostgreSQL\images\image_06.png)

Estes erros se tratam justamente dos arquivos que excluímos e para resolver este problema, removemos as linhas `2, 3, 7 e 8` do código, deixando-o assim:

```
import { Module } from '@nestjs/common';

@Module({
  imports: [],
})
export class AppModule {}

```

Por hora, não vamos nos preocupar com a funcionalidade do código e sim, ter em mente que este arquivo, **app.modules.ts** é o principal arquivo contendo toda a lógica de funcionamento da nossa API.

No arquivo **main.ts** precisamos dizer que movemos o arquivo **app.module.ts** de lugar:

```
import { NestFactory } from '@nestjs/core';
// Aqui dizemos que o arquivo foi movido
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

```

Altere também o caminho no arquivo **app.e2e-spec.ts** na pasta **test** para o ESLINT não seguir reclamando:

```
import { AppModule } from './../src/app/app.module';
```

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

## PostgreSQL e Prisma - Uma relação de amor e ódio

(Porque o contrário do amor é a indiferença! :blue_heart: )

## Relação Um pra Um

![one_to_one](misc/dbSchemas/one_to_one.png)

## Relação Um pra Muitos

![one_to_many](misc/dbSchemas/one_to_many.png)

## Relação Muitos pra Muitos

![many_to_many](misc/dbSchemas/many_to_many.png)

