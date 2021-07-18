let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = require('chai').expect;
let app = require('../src/index');


// Testes de API ACCOUNTS - MONGODB

describe('/POST  Account já cadastrada', () => {
  it('Account não encontra', (done) => {
    let body = {
      email: "alex@gmail.com", 
      password: "123",
      name: "Alex"
    };
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/accounts/sign-up')
      .send(body)
      .end((err, res) => {
        res.should.have.status(409);
        done();
      });
  });
});

describe('/POST  Account inválida', () => {
  it('Account inválida', (done) => {
    let body = {
      email: "teste", 
      password: "123",
      name: "Teste"
    };
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/accounts/sign-up')
      .send(body)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});

describe('/POST  Account cadastrada', () => {
  it('Account encontrada', (done) => {
    let body = {
      email: "teste@gmail.com", 
      password: "123",
      name: "Teste"
    };
    console.log(body)
    chai.request('http://localhost:9000')
      .post('/api/v1/accounts/sign-up')
      .send(body)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});
