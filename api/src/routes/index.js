// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
const { Videogame, Genre } = require('../db')
const axios = require('axios');
const { API_KEY }  = process.env;

// Inicializo una instancia de express
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




// ----------------- GET Functions ------------------
// IMPORTANTE: axios por default hace un get, entonces;
// axios.get(`http://...`)  ===  axios(`http://....`)


const SaveApiInfo = async (games) => {
  try{
    for(let i=0; i<games.length; i++){
    
      let gameNew = {
        name: games[i].name,
        image: games[i].image,
        released: games[i].released,
        rating: games[i].rating,
        platforms: games[i].platforms,
        createdInDatabase: true,
        owner: "Admin"
      };
      
      const detail = await axios.get(`https://api.rawg.io/api/games/${games[i].id}?key=${API_KEY}`);
      gameNew.description = detail.data.description_raw;
      
      let [instance, created]  = await Videogame.findOrCreate({
        where: { name: gameNew.name },
        defaults: gameNew,
      });
      
      if(created){
        let gameGens = games[i].genres.split(", ");
        let genresToAdd = await Genre.findAll({ where:{name: gameGens}});
        await instance.addGenre(genresToAdd);
      };
    };
  }catch(e){
    console.log(e)
  };
};


const getApiInfo = async (index=0) => {

  const apiGames = [];
  
  for (let i = 1; i <= 1; i++){
    let apiInfo = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=${index+i}`);
    apiInfo.data.results.map( e => 
      apiGames.push({
        id : e.id,
        name: e.name,
        image: e.background_image,
        released: e.released,
        rating: e.rating,
        genres: e.genres.map(e => e.name).join(', '),
        platforms: e.platforms.map((e) => e.platform.name).join(', '),
        createdInDatabase: false,
        owner: "Admin"
      })
    );
  };
  
  // Guardado progresivo de juegos en db
  SaveApiInfo(apiGames);
  
  return (apiGames);
};


const getDetailInfo = async (id) => {
  const detail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  
  const gameInfo = {
    id : detail.data.id,
    name: detail.data.name,
    image: detail.data.background_image,
    released: detail.data.released,
    rating: detail.data.rating,
    genres: detail.data.genres.map(e => e.name).join(', '),
    platforms: detail.data.platforms.map((e) => e.platform.name).join(', '),
    createdInDatabase: false,
    owner: "Admin",
    
    description: detail.data.description_raw
  };
  
  return (gameInfo);
};


const getDbInfo = async () => {
  const dbinfo = await Videogame.findAll({
  include:{
    model: Genre,
    attribute: ['name'],
    through: {
      attributes: [],
      }
    }
  });

  let data = JSON.stringify(dbinfo);
  let data2 = JSON.parse(data);

  for(let i=0; i<data2.length; i++){
    data2[i]={
      ...data2[i],
      genres: data2[i].genres.map(g=>g.name).join(', ')
    };
  };

  return (data2);
};


const getAllGames = async () => {
  const DbGames = await getDbInfo();
  
  const adminGames = DbGames.filter(g => g.owner === "Admin")
  const page = Math.floor((adminGames.length) / 40);
  
  const apiGames = await getApiInfo(page);
  const allGames = DbGames.concat(apiGames);
  
  
  const deleteDuplicateGames = (arr) => {
    const gamesMap = arr.map(game => {
      return [game.name, game]
    });
  
    return [...new Map(gamesMap).values()];
  }
  const noRepeatedGames = deleteDuplicateGames(allGames)
 
  return (noRepeatedGames); 
};


const getGenres = async () => {
  const apiG = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const Genres = apiG.data.results.map(g => g.name);
  return (Genres);
};


const getPlatforms = async () => {
  const apiP = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
  const Platforms = apiP.data.results.map(g => g.name).sort();
  return (Platforms);
};




// ---------------------- Routes ----------------------
router.get('/conn', async function(req, res, next){
  //setTimeout(() => res.status(200).send("Connection stablished"), 2000)
  return res.status(200).send("Connection stablished");
});



router.get('/videogames', async function(req, res, next){
  const allGames = await getAllGames();
  const {name} = req.query;
  if(!name) return res.status(200).json(allGames);
  try {
    const gamefilter = allGames.filter(game => game.name.toLowerCase().includes(name.toLowerCase())).slice(0,15);
    if(gamefilter.length) {return res.status(200).json(gamefilter)}
    else {return res.status(404).send('Sorry, name not found')};
  }catch(e){
    res.send(e);
  };
});



router.get('/videogames/:idgame', async function(req, res, next){
  const localGame = req.query.CIDB
  const {idgame} = req.params;
  
  if(localGame === "true"){
    let findById = await Videogame.findOne({
      where: { 
        id: idgame 
      },
      include: {
        model: Genre,
        attribute: ['name'],
        through: {
          attributes: [],
        }
      }
    });
    findById = JSON.stringify(findById);
    findById = JSON.parse(findById);
    findById = {
      ...findById,
      genres: findById.genres.map(g=>g.name).join(', ')
    }; 
    if(!findById) return res.status(404).send('Id not found');
    return res.status(200).json(findById);
    
  }else{
    const gameDetailApi = await getDetailInfo(idgame);
    
    if(!gameDetailApi) return res.status(404).send('Id not found');
    return res.status(200).json(gameDetailApi);
  };
});



router.get('/genres', async function(req, res, next){
  const genresDB1 = await Genre.findAll();
  if(genresDB1.length > 0) return res.status(200).json(genresDB1);

  // Envía el arreglo de géneros limpio (sin el id de c/u)
  /*     
  const genresDB01 = await Genre.findAll();
  let data = JSON.stringify(genresDB01);
  let data2 = JSON.parse(data);
  data2 = data2.map(g=>g.name);
  res.json(data2); 
  */
  
  const allGenres = await getGenres();
  for(let i=0; i < allGenres.length; i++){
    let gen = allGenres[i]
    Genre.findOrCreate({
      where:{name: gen}
    });
  };
  const genresDB2 = await Genre.findAll();
  return res.status(200).json(genresDB2);
});



router.get('/platforms', async function(req, res, next){
  try{
    const platforms = await getPlatforms();
    return res.status(200).json(platforms);
  }catch{
    return res.status(500).send('Error to send platforms list');
  }
});



router.get('/:content', async function(req, res, next){
  return res.status(404).send('The content does not exist');
});



router.post('/videogames', async function(req, res, next){
  const {name, description, released, rating, platforms, image, genres} = req.body;

  try{
    let [instance, created] = await Videogame.findOrCreate({
      where:{name: name},
      defaults:{description, released, rating, platforms, image}
    });
    
    if(created){
      let gendb = await Genre.findAll({ where:{name: genres}});
      instance.addGenre(gendb); 
    };
    return res.status(200).send('The videogame was successfully created');
    
  }catch(e){
    console.log(e)
    return res.status(400).send('Error in the process, sorry cheap')
  };
});



router.put('/videogames', async function(req, res, next){
  
  try{
  const { id, name, description, released, rating, platforms, image, genres } = req.body;
  
  const values = {
    name,
    description,
    released,
    rating,
    platforms,
    image
  };
  
  for (const property in values) {
    if(!values[property] || typeof values[property] !== "string"){
      delete values[property];
    }
  };
  
  await Videogame.update(
    values, 
    {where: {id: id}}
  );
  
  if(genres && genres.length){
  
    const game = await Videogame.findByPk(id);
    await game.removeGenres();
    let gendb = await Genre.findAll({ where:{name: genres}});
    //await game.addGenre(gendb);
    await game.setGenres(gendb);
  }
  
  return res.status(200).send('Videogame successfully updated');
  
  }catch(e){
    console.log(e);
    return res.status(500).send('Error in the process, sorry cheap');
  };
});



router.delete('/videogames', async function(req, res, next){
  const { id } = req.body;
  
  if(id === "ALL"){
    try{
      await Videogame.destroy({
        where: {},
        options: {
          truncate: true,
          cascade: true
        }
      });
      return res.status(200).send('All games were successfully deleted');
    }catch(e){
      console.log(e)
      return res.status(500).send('Error in the process');
    }; 
  };
  
  const gameToDelete = await Videogame.findByPk(id);
  //const gameToDelete = await Videogame.findOne({ where: { id: id } });
  
  if(!gameToDelete || !id){
    return res.status(400).send('Game not found');
  };
  
  try{
    await gameToDelete.destroy({ force: true })
    res.status(200).send(`Game deleted succesfully`);
  }catch{
    return res.status(500).send('Error in the process');
  }; 
});



module.exports = router;
