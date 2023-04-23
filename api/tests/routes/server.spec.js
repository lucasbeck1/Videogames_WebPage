/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

const agent = session(app);


const videogameForTEST1 = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b21',
  name: 'TEST GAME 1',
  description: 'A good old game',
  platforms: 'Nes',
  genres:["Action"]
};

const videogameForTEST2 = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b22',
  name: 'TEST GAME 2',
  description: 'A good old game',
  platforms: 'Nes',
  genres:["Action"]
};



describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })),

  beforeEach(() => Videogame.sync({ force: false }));



  describe('GET /videogames', () => {
    before(()=> Videogame.create(videogameForTEST1)) 
    after(() => {
      Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b21')
      .then((game) => game.destroy({force: true}))
    })
    
    it('Get all games (No query parameters)', (done) => {
      agent.get('/videogames')
      .then((res) =>{
        expect(res.status).equal(200)
        expect(res.type).to.match(/json/)
        expect(res.body).to.have.lengthOf.above(0);
        done()
      })
      .catch((err) => done(err))
    });

    it('Get games by name (W/ query parameters)', (done) => {
      agent.get('/videogames?name=test')
      .then((res) =>{
        expect(res.status).equal(200)
        expect(res.type).to.match(/json/)
        expect(res.body).to.have.lengthOf.above(0);
        done()
      })
      .catch((err) => done(err))
    });
    
    it('Get no games by name (W/ query parameters)', (done) => {
      agent.get('/videogames?name=estejuegonodeberiaexistir')
      .then((res) =>{
        expect(res.status).equal(404)
        done()
      })
      .catch((err) => done(err))
    });
  });



  describe('GET /videogames:idgame', () => {
    before(()=> Videogame.create(videogameForTEST2) )  
    after(() => {
      Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b22')
      .then((game) => game.destroy({force: true}))
    });
    
    it('Get Testing game', (done) => {
      agent.get('/videogames/10b44b9b-626a-4940-ba86-3c80796b9b22?CIDB=true')
      .then((res) =>{
        expect(res.status).equal(200)
        expect(res.type).to.match(/json/)
        expect(res.body.name).equal('TEST GAME 2')
        expect(res.body.owner).equal('User')
        expect(res.body.genres.length).equal(0)
        expect(res.body.genres).to.have.lengthOf(0)
        done()
      })
      .catch((err) => done(err))
    });
  });
  
  
  
  describe('GET /platforms', () => {
    it('Get platforms', (done) => {
      agent.get('/platforms')
      .then((res) =>{
        expect(res.status).equal(200)
        expect(res.type).to.match(/json/)
        expect(res.body).to.have.lengthOf.above(0);
        done()
      })
      .catch((err => done(err)))
    });
  });
  


  describe('GET /genres', () => {
    it('Get genres', (done) => {
      agent.get('/genres')
      .then((res) =>{
        expect(res.status).equal(200)
        expect(res.type).to.match(/json/)
        expect(res.body).to.have.lengthOf.above(0);
        done()
      })
      .catch((err => done(err)))
    });
  });

  
  
  describe('POST /videogames', function () {
    after(() => {
      Videogame.findOne({ where: { name: 'TEST GAME 1' } }) 
      .then((game) => game.destroy({force: true}))
    });
    
    it('post game', (done) => {
      agent.post('/videogames')
      .send(videogameForTEST1)
      .then((res) => {
        expect(res.status).equal(200)
        expect(res.text).equal('The videogame was successfully created')
        done()
      })
      .catch((err => done(err)))
    });
  });
  
  
  
  describe('PUT /videogames', function () {
    before(() => Videogame.create(videogameForTEST2));
    after(() => {
      Videogame.findByPk("10b44b9b-626a-4940-ba86-3c80796b9b22") 
      .then((game) => game.destroy({force: true}))
    });
    
    it('Modify game', (done) => {
      agent.put('/videogames')
      .send({
        id: "10b44b9b-626a-4940-ba86-3c80796b9b22",
        name: "TEST SUCCES"
      })
      .then((res) => {
        expect(res.status).equal(200)
        expect(res.text).equal('Videogame successfully updated')
        done()
      })
      .catch((err => done(err)))
    });
  });
  
  
  
  describe('DELETE /videogames', function () {
    before(() => Videogame.create(videogameForTEST1));
    
    it('delete a game', (done) => {
      agent.delete('/videogames')
      .send({id: "10b44b9b-626a-4940-ba86-3c80796b9b21"})
      .then((res) => {
        expect(res.status).equal(200)
        expect(res.text).equal('Game deleted succesfully')
        done()
      })
      .catch((err => done(err)))   
    });
  });
});
