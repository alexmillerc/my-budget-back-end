let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = require('chai').expect;
let app = require('../src/index');

chai.use(chaiHttp);

// Testes de API USERS - MONGODB

describe('Teste 08 - /GET User não encontrado', () => {
  it('User não encontrado', (done) => {
    chai.request('http://localhost:9000')
      .get(`/api/v1/users/teste@gmail.com`)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('Teste 09 - /POST Users criado', () => {
  it('Users criado', (done) => {
    let body = {
      email: "teste@gmail.com"
    }
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/users/teste@gmail.com')
      .send(body) 
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('Teste 10 - /GET User encontrado', () => {
  it('User encontrado', (done) => {
    chai.request('http://localhost:9000')
      .get(`/api/v1/users/teste@gmail.com`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});




