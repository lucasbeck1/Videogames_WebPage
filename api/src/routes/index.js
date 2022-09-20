const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Videogame, Genre} = require('../db')
const axios = require('axios');
const { get } = require('superagent');
const {API_KEY} = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// --- GetInfo Functions ---


const getApiInfo = async () => {
    const firstHundredGames = [];
    for (let i = 1; i < 6; i++) {
        let apiInfo = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
        apiInfo.data.results.map(e => 
            firstHundredGames.push({
                id : e.id,
                name: e.name,
                img: e.background_image,
                genres: e.genres.map(e => e.name).join(', '),
                released: e.released,
                rating: e.rating,
                platform: e.platforms.map((e) => e.platform.name).join(', '),
                createdInDatabase: false
            })
        );
    };
    return (firstHundredGames);
};

const getDetailInfo = async (id) => {
    const det = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    return (det.data.description);
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

const getGenres = async (id) => {
    const apiG = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const Genres = apiG.data.results.map(g => g.name);
    return (Genres);
};


// --- Routes ---


router.get('/videogames', async function(req, res, next){
    const allGames = await getAllGames();
    const {name} = req.query;
    if(!name) return res.json(allGames);
    try {
        const gamefilter = allGames.filter(game => game.name.toLowerCase().includes(name.toLowerCase())).slice(0,15);
        if(gamefilter.length) {return res.json(gamefilter)}
        else {return res.status(404).send('Nombre no encotrado')};
    }catch(e){
        res.send(e);
    };
});


router.get('/videogames/:idgame', async function(req, res, next){
    const allGames = await getAllGames();
    const {idgame} = req.params;
    const findById = allGames.find(g => g.id === Number(idgame));
   
    if(!findById) return res.send('Id no encotrado');
    if(findById.createdInDatabase === true) return res.json(findById);
    else {
        const detGame = await getDetailInfo(idgame);
        findById.description = detGame;
        res.json(findById);
    };
});


router.get('/genres', async function(req, res, next){
    const allGenres = await getGenres();
    for(let i=0; i < allGenres.length; i++){
        let gen = allGenres[i]
        Genre.findOrCreate({
            where:{gen}
        })
    };
    const genresDB = Genre.findAll();
    res.json(genresDB);
});


router.post('/videogames', function(req, res, next){
    const {name, description, released, rating} = req.body;
    const gameNew = {name, description, released, rating};
    Videogame.findOrCreate({
        where:{name},
        defaults:{gameNew}
    });
    res.send('The videogame was successfully created')
});





module.exports = router;
