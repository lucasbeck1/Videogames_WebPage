/* eslint-disable import/no-extraneous-dependencies */
//const { expect } = require('chai');
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

const videogameForTEST3 = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b23',
  name: 'TEST GAME 3',
  description: 'A good old game',
  platforms: 'Nes',
  genres:["Action"]
};

const videogameForTEST4 = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b24',
  name: 'TEST GAME 4',
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
    before(()=> {
      Videogame.create(videogameForTEST1) 
      .then(() => done())
    }) 
    after(() => {
      Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b21')
      .then((game) => {
        game.destroy({force: true})
        done();
      })
    })
    
    it('Get all games (No query parameters)', (done) => {
      agent.get('/videogames')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      done()
    });

    it('Get games by name (W/ query paraneters)', (done) => {
    agent.get('/videogames?name=test')
    .expect(200)
    .expect('Content-Type', /json/)
    done()
    });
    
    it('Get no games by name (W/ query paraneters)', (done) => {
      agent.get('/videogames?name=estejuegonodeberiaexistir')
      .expect(200)
      .expect('Content-Type', /json/)
      done()
      });
  });

  describe('GET /videogames:idgame', () => {
    before(()=> {
      Videogame.create(videogameForTEST2) 
      .then(() => done())
    })  
    after(() => {
      Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b22')
      .then((game) => {
        game.destroy({force: true})
        done();
      })
    });
    
    it('Get Testing game', (done) => {
      agent.get('/videogames/10b44b9b-626a-4940-ba86-3c80796b9b22')
      .expect(200)
      .expect('Content-Type', /json/)
      done()
    });
  });

  describe('GET /genres', () => {
    it('Get genres', (done) => {
      agent.get('/genres')
      .expect(200)
      .expect('Content-Type', /json/)
      done()
    });
  });

  
  describe('POST /videogames', function () {
    after(() => {
      Videogame.findOne({ where: { name: 'TEST GAME 3' } }) 
      .then((game) => {
        game.destroy({force: true})
        done();
      })
    });
    it('post game', (done) => {
      agent.post('/videogames')
      .send(videogameForTEST3)
      .then((res) => {
        expect(res.status).equal(200)
        expect(res.text).equal('The videogame was successfully created')
        done()
      })
      .catch((err => done(err)))
    });
  });
  
  describe('DELETE /videogames', function () {
    before(() => {
      Videogame.create(videogameForTEST4)
      .then(() => done())
    });
    it('delete a game', (done) => {
      agent.delete('/videogames')
      .send({id: "10b44b9b-626a-4940-ba86-3c80796b9b24"})
      .then((res) => {
        expect(res.status).equal(200)
        expect(res.text).equal('Game deleted succesfully')
        done()
      })
      .catch((err => done(err)))
     
      
    });
  });
});
