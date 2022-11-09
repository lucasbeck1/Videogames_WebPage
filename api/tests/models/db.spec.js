const { Videogame, conn, Genre } = require('../../src/db.js');
const { expect } = require('chai');


const videogameForTEST = {
  id: '10b44b9b-626a-4940-ba86-3c80796b9b27',
  name: 'Super Mario Bros',
  description: 'A good old game',
  platforms: 'Nes'
};



describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('CREATE', () => {
      it('Throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Throw an error if missing data', () => {
        Videogame.create({ name: 'Super Mario Bros' })
        .then(() => done(new Error('Other data require')))
        .catch(() => done());
      });
      it('Should work when its a valid request', () => {
        Videogame.create(videogameForTEST)
        .then(async() => {
          let game1 = Videogame.findByPk('10b44b9b-626a-4940-ba86-3c80796b9b27');
          let game2 = Videogame.findOne({ where: { id: '10b44b9b-626a-4940-ba86-3c80796b9b27' } });
          // game1 === game2
          return (game1);
        })
        .then((game) => {
          /* console.log('GAME: ', game);
          console.log('GAME: ', game.dataValues);
          console.log('GAME: ', game.dataValues.name);
          console.log('TYPE: ', typeof game); */
          expect(game.dataValues.name).to.equal('Super Mario Bros')
        })
        .then(() => {
          done()
        })
        .catch(() => done());
      });
    });
  });
});
