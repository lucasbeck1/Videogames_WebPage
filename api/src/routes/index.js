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


const getApiInfo = async () => {
    const firstHundredGames = [];
    for (let i = 1; i < 6; i++) {
        let apiInfo = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
        apiInfo.data.results.map(e => {
            firstHundredGames.push({
                id : e.id,
                name: e.name,
                img: e.background_image,
                genres: e.genres.map(e => e.name).join(', '),
                released: e.released,
                rating: e.rating,
                platform: e.platforms.map((e) => e.platform.name).join(', ')
            })
        })
    }
    return firstHundredGames;
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
    })
    return dbinfo;
}

const getAllGames = async () => {
    const apiGames = await getApiInfo();
    const DbGames = await getDbInfo();
    return (apiGames.concat(DbGames));
}


router.get('/videogames', async function(req, res, next){
    const allGames = await getAllGames();
    const {name} = req.query;
    if(!name){
        res.json(allGames);
    }else{
        allGames.filter(game => game.name.includes(name));
        res.json(allGames);
    }

});

router.get('/videogames/:idVideogame', async function(req, res, next){
    const allGames = await getAllGames();
    const {idVideogame} = req.params;
    const findGameById = allGames.find(game => game.id === idVideogame);
    
});





module.exports = router;
