# PRE HACKATON JUNTO NOVOS TALENTOS - 2023

# Ferramentas utilizadas:

- Node.js
- Express
- JWT
- Bycript
- Typescript
- TypeORM
- Postgres
- Docker
- Insomnia
- Beekeeper Studio

# Passo a passo para rodar o projeto:

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```
yarn install
```

**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

```
yarn --version
```

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

```
npm install --global yarn
```

<br>

# Como alternar entre docker e localhost

Esse projeto está com o Docker configurado e pronto para uso

Basta buildar e subir o container usando o comando padrão:

```
docker-compose up --build
```

ou

```
docker compose up --build
```

O comando pode variar com a versão do docker compose instalada em sua máquina

**_ATENÇÃO:_** a porta utilizada para rodar o docker é a `5431`.
Caso tenha algum problema com essa porta, basta alterá-la no docker-compose.yml.

<br>

## **Mas caso você necessite executar o projeto em `localhost`**

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local

E altere a variável **`DB_HOST`** para **`localhost`**

Com isso feito, para rodar sua aplicação, basta utilizar o comando

```
yarn dev
```

<br>
