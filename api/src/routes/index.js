// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
const { Videogame, Genre } = require('../db')
const axios = require('axios');
const { get } = require('superagent');
const { API_KEY}  = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




// ----------------- GET Functions ------------------
// IMPORTANTE: axios por default hace un get, entonces;
// let apiInfo = await axios.get(`https://api.rawg.io/api/games`)
// ===
// let apiInfo = await axios(`https://api.rawg.io/api/games`)


const getApiInfo = async () => {
    const firstHundredGames = [];
    for (let i = 1; i <= 3; i++) {
        let apiInfo = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=${i}`)
        apiInfo.data.results.map(e => 
            firstHundredGames.push({
                id : e.id,
                name: e.name,
                image: e.background_image,
                genres: e.genres.map(e => e.name).join(', '),
                released: e.released,
                rating: e.rating,
                platforms: e.platforms.map((e) => e.platform.name).join(', '),
                createdInDatabase: false
            })
        );
    };
    return (firstHundredGames);
};

const getDetailInfo = async (id) => {
    const det = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    return (det.data.description_raw);
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
    return (dbinfo);
};
const getAllGames = async () => {
    const apiGames = await getApiInfo();
    const DbGames = await getDbInfo();
    return (apiGames.concat(DbGames));
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


router.get('/videogames', async function(req, res, next){
    const allGames = await getAllGames();
    const {name} = req.query;
    if(!name) return res.json(allGames);
    try {
        const gamefilter = allGames.filter(game => game.name.toLowerCase().includes(name.toLowerCase())).slice(0,15);
        if(gamefilter.length) {return res.json(gamefilter)}
        else {return res.status(404).send('Sorry, name not found')};
    }catch(e){
        res.send(e);
    };
});


router.get('/videogames/:idgame', async function(req, res, next){
    const allGames = await getAllGames();
    const {idgame} = req.params;
    const findById = allGames.find(g => g.id.toString() === idgame);
   
    if(!findById) return res.send('Id not found');
    if(findById.createdInDatabase === true) return res.json(findById);
    else {
        const detGame = await getDetailInfo(idgame);
        findById.description = detGame;
        res.json(findById);
    };
});


router.get('/genres', async function(req, res, next){
    //const genresDB1 = await Genre.findAll();
    //if(genresDB1) return (genresDB1);

    const allGenres = await getGenres();
    for(let i=0; i < allGenres.length; i++){
        let gen = allGenres[i]
        Genre.findOrCreate({
            where:{name: gen}
        })
    };
    const genresDB2 = await Genre.findAll();
    res.json(genresDB2);
});


router.post('/videogames', async function(req, res, next){
    const {name, description, released, rating, platforms, image, genres} = req.body;
    //const gameNew = {description, released, rating, platforms, image};
  
    try{
        /* 
        let myGame = await Videogame.findOrCreate({
            where:{name},
            defaults:{description, released, rating, platforms, image}
            //defaults:{gameNew}
        });
        */
       
       /*   
       for(let i=0; i<genres.length; i++){
           let gendb = await Genre.findOne({ where:{name: genres[i]}});
           myGame.addGenre(gendb);
        };
        */

        let myGame = await Videogame.create({ name, description, released, rating, image,        platforms});

        let gendb = await Genre.findAll({ where:{name: genres}});
        await myGame.addGenre(gendb);

        res.send('The videogame was successfully created');
    }catch(e){
        console.log(e)
        res.send('Error in the process, sorry cheap')
    };
});





module.exports = router;
