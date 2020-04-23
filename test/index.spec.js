const chai = require('chai');
const http = require('chai-http');
const subset = require('chai-subset');

const index = require('../index');

chai.use(http);
chai.use(subset);

describe('Teste de Requisição', () => {

    it('Colocano rotas novas retorno: success: true', (done) => {
        chai.request(index.app).post('/route').send({
            "from": "GRU",
            "to": "SCL",
            "price": 40
        })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({
                    "success": true,
                    "routes": {
                        "from": "GRU",
                        "to": "SCL",
                        "price": "40"
                    }
                })
                chai.expect(res.body.routes.from).to.be.a('string');
                chai.expect(res.body.routes.to).to.be.a('string');
                chai.expect(res.body.routes.price).to.be.a('string');
                done();
            })
    });

    it('Adicionando rotas novas retorno: success: false', (done) => {
        chai.request(index.app).post('/route').send({
            "from": "GRU",
            "to": "SCL"
        }).end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.expect(res.body.success).to.be.eql(false);
            done();
        })
    })

    it('Colocano rotas novas com conexão, retorno: success: true', (done) => {
        chai.request(index.app).post('/route').send({
            "from": "GRU",
            "to": "SCL",
            "connection": "BRU",
            "price": 40
        })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql(
                    {
                        "success": true,
                        "routes": {
                            "from": "GRU",
                            "to": "SCL",
                            "connection": "BRU",
                            "price": "40"
                        }
                    }
                )
                chai.expect(res.body.routes.from).to.be.a('string');
                chai.expect(res.body.routes.to).to.be.a('string');
                chai.expect(res.body.routes.price).to.be.a('string');
                chai.expect(res.body.routes.connection).to.be.a('string');
                done();
            });
    });

    it('Leitura dos voos', (done) => {
        chai.request(index.app).get('/quote/GRU/BRC')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({
                    "success": true,
                    "result": {
                      "route": "GRU,BRC",
                      "price": 10
                    }
                  })
                chai.expect(res.body.result.route).to.be.a('string');
                chai.expect(res.body.result.price).to.be.a('number');
                done();
            })
    });

    it('Leitura dos voos, retorno: erro', (done)=>{
        chai.request(index.app).get('/quote/GRU/').end((err, res)=>{
            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(404);
            done();
        })
    })

})