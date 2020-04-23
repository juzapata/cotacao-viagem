# Programa de Cotação de Viagem
Simulação de um cotador de viagens

### Tech
Tecnologia usada

* [node.js]

### Installation

Requires [Node.js](https://nodejs.org/) v12.16.2 to run.

```sh
$ cd cotacao-viagem
$ npm install
$ npm start
```
- Aplicação irá roda na porta no localhost:3000

- Para testar
```sh
$ npm run test
```

### Endpoints

#### Leitura da rota ou das rotas mais baratas

- Metodo: GET
- localhost:3000/quote/{from}/{to}
- exemplo de endpoint: localhost:3000/quote/GRU/BRC
- Exemplo de Retorno: {
    "success": true,
    "result": {
    "route": "GRU,BRC",
    "price": 10
    }
}

#### Inclusão de rota

- metodo: POST
- localhost:3000/route
- Exemplo de Body: {
	 "from": "GRU",
	 "to": "SCL",
	 "price": 40
 }
 - Exemplo de Retorno: {
  "success": true,
  "routes": {
    "from": "GRU",
    "to": "SCL",
    "price": "40"
  }
}







