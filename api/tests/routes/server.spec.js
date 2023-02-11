/* eslint-disable import/no-extraneous-dependencies */
//const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);


const videogameForTEST = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b24',
  name: 'Super Mario Bros 2',
  description: 'A good old game',
  platforms: 'Nes'
};


describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })),

  beforeEach(() => Videogame.sync({ force: true })
    //.then(() => Videogame.create(videogameForTEST))
    );

  describe('GET /videogames', () => {
    it('Get all games (No query parameters)', (done) => {
      agent.get('/videogames')
      .expect(200)
      .expect('Content-Type', /json/)
      done()
    });

    it('Get games by name (W/ query paraneters)', (done) => {
    agent.get('/videogames?name=mario')
    .expect(200)
    .expect('Content-Type', /json/)
    done()
    });
  });

  describe('GET /videogames:idgame', () => {
    it('Get Testing game', (done) => {
      agent.get('/videogames/10b44b9b-626a-4940-ba86-3c80796b9b24')
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

  
  /* describe('POST /videogames', function () {
    it('post game', () =>
      agent.post('/videogames')
      .send(videogameForTEST2)
      .then((res) => {
        expect(res.messaje).toEqual('The videogame was successfully created');
      })
    );
  }); */
  

});
