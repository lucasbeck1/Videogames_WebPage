const { Videogame, conn, Genre } = require('../../src/db.js');
const { expect } = require('chai');


const videogameForTEST = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b27',
  name: 'Super Mario Bros for Test',
  description: 'A good old game',
  platforms: 'Nes'
};

const genreForTEST = {
  name: 'Spacial Adventure'
};



describe('Videogame model', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
 
  beforeEach(() => Videogame.sync({ force: true }));
  
  describe('CREATE', () => {
    it('Throw an error if name is null', (done) => {
      Videogame.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });
    it('Throw an error if missing data', (done) => {
      Videogame.create({ name: 'Super Mario Bros for Test' })
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
        expect(game.dataValues.name).to.equal('Super Mario Bros for Test');
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
 
  beforeEach(() => Genre.sync({ force: true }));
  
  describe('CREATE', () => {
    it('Should create a genre', (done) => {
      Genre.create(genreForTEST)
      .then(() => {
        let gameTest = Genre.findOne({ where: { name: 'Spacial Adventure' } }); 
        return (gameTest);
      })
      .then((genre) => {
        expect(genre.dataValues.name).to.equal('Spacial Adventure');
        done();
      })
      .catch((err) => done(err));
    });
  });
  
  describe('DELETE', () =>{
    it('Should delete a genre from database', (done) => {
      Genre.create(genreForTEST)
      .then(() => {
        let genreTest = Genre.findOne({ where: { name: 'Spacial Adventure' } });
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
