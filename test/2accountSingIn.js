let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = require('chai').expect;
let app = require('../src/index');

chai.use(chaiHttp);

// Testes de API ACCOUNTS - MONGODB

describe('Teste 04 - /GET  Account não encontra', () => {
  it('Account não encontra', (done) => {
    let body = {
      email: "teste2@gmail.com",
      password: "123"
    };
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/accounts/sign-in')
      .send(body)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('Teste 05 - /GET  Account inválida', () => {
  it('Account inválida', (done) => {
    let body = {
      email: "teste",
      password: "123"
    };
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/accounts/sign-in')
      .send(body)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});

describe('Teste 06 - /GET  Password inválido', () => {
  it('Password inválido', (done) => {
    let body = {
      email: "teste@gmail.com",
      password: "321"
    };
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/accounts/sign-in')
      .send(body)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});

describe('Teste 07 - /GET  Account encontrada', () => {
  it('Account encontrada', (done) => {
    let body = {
      email: "teste@gmail.com",
      password: "123"
    };
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/accounts/sign-in')
      .send(body)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});





