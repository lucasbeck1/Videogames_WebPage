const { Videogame, conn, Genre } = require('../../src/db.js');
const { expect } = require('chai');


const videogameForTEST = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b27',
  name: 'GAME FOR TEST',
  description: 'A good old game',
  platforms: 'Nes'
};

const genreForTEST = {
  name: 'GENRE FOR TEST'
};



describe('Videogame model', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: false }));
  
  describe('CREATE', () => {
    after(() => {
      Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b27')
      .then((game) => {
        game.destroy({force: true})
        done();
      })
    });
    it('Throw an error if name is null', (done) => {
      Videogame.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });
    it('Throw an error if missing data', (done) => {
      Videogame.create({ name: 'GAME FOR TEST' })
      .then(() => done(new Error('Other data require')))
      .catch(() => done());
    });
    it('Should create a game when its a valid request', (done) => {
      Videogame.create(videogameForTEST)
      .then(() => {
        let gameTest = Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b27');
        // let gameTest = Videogame.findOne({ where: { id: '10b44b9b-626a-4940-ba86-3c80796b9b27' } }); 
        return (gameTest);
      })
      .then((game) => {
        /* console.log('GAME: ', game);
        console.log('GAME: ', game.dataValues);
        console.log('GAME: ', game.dataValues.name);
        console.log('TYPE: ', typeof game); */
        expect(game.dataValues.name).to.equal('GAME FOR TEST');
        done();
      })
      .catch((err) => done(err));
    });
  });
  
  describe('DELETE', () =>{
    it('Should delete a game from database', (done) => {
      Videogame.create(videogameForTEST)
      .then(() => {
        let gameTest = Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b27');
        return (gameTest);
      })
      .then((game) => {
        game.destroy({force: true})
        done();
      })
      .catch((err) => done(err));
    });
  });
});


describe('Genre model', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Genre.sync({ force: false }));
  
  describe('CREATE', () => {
    after(() => {
      Genre.findOne({ where: { name: 'GENRE FOR TEST' } })
      .then((genre) => {
        genre.destroy({force: true})
        done();
      })
    });
    it('Should create a genre on database', (done) => {
      Genre.create(genreForTEST)
      .then(() => {
        let gameTest = Genre.findOne({ where: { name: 'GENRE FOR TEST' } }); 
        return (gameTest);
      })
      .then((genre) => {
        expect(genre.dataValues.name).to.equal('GENRE FOR TEST');
        done();
      })
      .catch((err) => done(err));
    });
  });
  
  describe('DELETE', () =>{
    it('Should delete a genre from database', (done) => {
      Genre.create(genreForTEST)
      .then(() => {
        let genreTest = Genre.findOne({ where: { name: 'GENRE FOR TEST' } });
        return (genreTest);
      })
      .then((genre) => {
        genre.destroy({force: true})
        done();
      })
      .catch((err) => done(err));
    });
  });
});
