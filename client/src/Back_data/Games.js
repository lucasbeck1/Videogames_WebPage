const Games = [
    {
        "id": 3498,
        "name": "Grand Theft Auto V",
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "released": "2013-09-17",
        "rating": 4.47,
        "genres": "Action, Adventure",
        "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, PlayStation 3, Xbox 360, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 3328,
        "name": "The Witcher 3: Wild Hunt",
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "released": "2015-05-18",
        "rating": 4.66,
        "genres": "Action, Adventure, RPG",
        "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
        "createdInDatabase": false
    },
    {
        "id": 4200,
        "name": "Portal 2",
        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "released": "2011-04-18",
        "rating": 4.62,
        "genres": "Shooter, Puzzle",
        "platforms": "Xbox 360, Linux, macOS, PlayStation 3, PC, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 5286,
        "name": "Tomb Raider (2013)",
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "released": "2013-03-05",
        "rating": 4.05,
        "genres": "Action, Adventure",
        "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
        "createdInDatabase": false
    },
    {
        "id": 4291,
        "name": "Counter-Strike: Global Offensive",
        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "released": "2012-08-21",
        "rating": 3.57,
        "genres": "Action, Shooter",
        "platforms": "PC, Xbox 360, PlayStation 3",
        "createdInDatabase": false
    },
    {
        "id": 13536,
        "name": "Portal",
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "released": "2007-10-09",
        "rating": 4.51,
        "genres": "Adventure, Puzzle",
        "platforms": "Android, PlayStation 3, Xbox 360, Linux, macOS, PC, Nintendo Switch",
        "createdInDatabase": false
    },
    {
        "id": 12020,
        "name": "Left 4 Dead 2",
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "released": "2009-11-17",
        "rating": 4.09,
        "genres": "Action, Shooter",
        "platforms": "macOS, Linux, PC, Xbox 360",
        "createdInDatabase": false
    },
    {
        "id": 5679,
        "name": "The Elder Scrolls V: Skyrim",
        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "released": "2011-11-11",
        "rating": 4.42,
        "genres": "Action, RPG",
        "platforms": "PC, Nintendo Switch, Xbox 360, PlayStation 3",
        "createdInDatabase": false
    },
    {
        "id": 4062,
        "name": "BioShock Infinite",
        "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        "released": "2013-03-26",
        "rating": 4.39,
        "genres": "Action, Shooter",
        "platforms": "PlayStation 4, Xbox 360, Nintendo Switch, Linux, PC, PlayStation 3, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 802,
        "name": "Borderlands 2",
        "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        "released": "2012-09-18",
        "rating": 4.02,
        "genres": "Action, Shooter, RPG",
        "platforms": "PlayStation 3, macOS, PC, Android, Linux, PS Vita, Xbox 360",
        "createdInDatabase": false
    },
    {
        "id": 3439,
        "name": "Life is Strange",
        "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "released": "2015-01-29",
        "rating": 4.11,
        "genres": "Adventure",
        "platforms": "PC, Linux, PlayStation 3, macOS, iOS, Xbox 360, Android, PlayStation 4, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 28,
        "name": "Red Dead Redemption 2",
        "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        "released": "2018-10-26",
        "rating": 4.59,
        "genres": "Action, Adventure",
        "platforms": "PC, PlayStation 4, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 13537,
        "name": "Half-Life 2",
        "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        "released": "2004-11-16",
        "rating": 4.5,
        "genres": "Action, Shooter",
        "platforms": "PC, Xbox 360, Linux, Xbox, Android, macOS",
        "createdInDatabase": false
    },
    {
        "id": 4286,
        "name": "BioShock",
        "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        "released": "2007-08-21",
        "rating": 4.37,
        "genres": "Action, Shooter",
        "platforms": "PlayStation 3, macOS, PC, Xbox 360",
        "createdInDatabase": false
    },
    {
        "id": 1030,
        "name": "Limbo",
        "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        "released": "2010-07-21",
        "rating": 4.16,
        "genres": "Adventure, Indie, Puzzle, Platformer",
        "platforms": "Linux, PS Vita, Android, Xbox One, Nintendo Switch, iOS, PC, macOS, Xbox 360, PlayStation 3, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 2454,
        "name": "DOOM (2016)",
        "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        "released": "2016-05-13",
        "rating": 4.38,
        "genres": "Action, Shooter",
        "platforms": "Xbox One, PC, Nintendo Switch, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 3070,
        "name": "Fallout 4",
        "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        "released": "2015-11-09",
        "rating": 3.8,
        "genres": "Action, RPG",
        "platforms": "Xbox One, PC, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 58175,
        "name": "God of War (2018)",
        "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        "released": "2018-04-20",
        "rating": 4.59,
        "genres": "Action, Adventure, RPG",
        "platforms": "PC, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 32,
        "name": "Destiny 2",
        "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        "released": "2017-09-06",
        "rating": 3.56,
        "genres": "Action, Shooter, Adventure, Massively Multiplayer",
        "platforms": "Xbox One, PC, PlayStation 4, Web, Xbox Series S/X, PlayStation 5",
        "createdInDatabase": false
    },
    {
        "id": 11859,
        "name": "Team Fortress 2",
        "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        "released": "2007-10-10",
        "rating": 3.67,
        "genres": "Action, Shooter",
        "platforms": "PC, macOS, Linux",
        "createdInDatabase": false
    },
    {
        "id": 3939,
        "name": "PAYDAY 2",
        "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        "released": "2013-08-13",
        "rating": 3.51,
        "genres": "Action, Shooter",
        "platforms": "Linux, PC, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 278,
        "name": "Horizon Zero Dawn",
        "image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
        "released": "2017-02-28",
        "rating": 4.32,
        "genres": "Action, Adventure, RPG",
        "platforms": "PlayStation 4, PC",
        "createdInDatabase": false
    },
    {
        "id": 4459,
        "name": "Grand Theft Auto IV",
        "image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        "released": "2008-04-29",
        "rating": 4.26,
        "genres": "Action, Adventure",
        "platforms": "Xbox 360, PlayStation 3, Xbox One, PC",
        "createdInDatabase": false
    },
    {
        "id": 3272,
        "name": "Rocket League",
        "image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        "released": "2015-07-07",
        "rating": 3.96,
        "genres": "Sports, Racing, Indie",
        "platforms": "Nintendo Switch, Linux, macOS, Xbox One, PC, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 10213,
        "name": "Dota 2",
        "image": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        "released": "2013-07-09",
        "rating": 3.05,
        "genres": "Action, Massively Multiplayer",
        "platforms": "Linux, macOS, PC",
        "createdInDatabase": false
    },
    {
        "id": 422,
        "name": "Terraria",
        "image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        "released": "2011-05-16",
        "rating": 4.06,
        "genres": "Action, Indie, Platformer",
        "platforms": "Xbox 360, Wii U, Nintendo 3DS, Xbox One, PlayStation 4, iOS, PC, macOS, Linux, Nintendo Switch, PlayStation 3, PS Vita, Android",
        "createdInDatabase": false
    },
    {
        "id": 41494,
        "name": "Cyberpunk 2077",
        "image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        "released": "2020-12-10",
        "rating": 4.09,
        "genres": "Action, Adventure, RPG",
        "platforms": "PlayStation 4, PC, Xbox Series S/X, PlayStation 5, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 766,
        "name": "Warframe",
        "image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        "released": "2013-03-25",
        "rating": 3.42,
        "genres": "Action, Shooter, Massively Multiplayer",
        "platforms": "Xbox Series S/X, PlayStation 5, PlayStation 4, Xbox One, Nintendo Switch, PC",
        "createdInDatabase": false
    },
    {
        "id": 29028,
        "name": "Metro 2033",
        "image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        "released": "2010-03-16",
        "rating": 3.93,
        "genres": "Action, Shooter",
        "platforms": "Xbox 360, PC",
        "createdInDatabase": false
    },
    {
        "id": 3192,
        "name": "Metal Gear Solid V: The Phantom Pain",
        "image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        "released": "2015-09-01",
        "rating": 4.16,
        "genres": "Action, Shooter",
        "platforms": "Xbox One, PlayStation 3, PlayStation 4, Xbox 360, PC",
        "createdInDatabase": false
    },
    {
        "id": 7689,
        "name": "Rise of the Tomb Raider",
        "image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        "released": "2015-11-10",
        "rating": 4.04,
        "genres": "Action",
        "platforms": "Xbox One, PC, macOS, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 3287,
        "name": "Batman: Arkham Knight",
        "image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
        "released": "2015-06-23",
        "rating": 4.23,
        "genres": "Action",
        "platforms": "PC, Xbox One, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 23027,
        "name": "The Walking Dead: Season 1",
        "image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "released": "2012-04-23",
        "rating": 4.33,
        "genres": "Action, Adventure",
        "platforms": "macOS, PC, iOS, Android, PS Vita, PlayStation 4, PlayStation 3, Xbox 360, Nintendo Switch, Xbox One",
        "createdInDatabase": false
    },
    {
        "id": 16944,
        "name": "The Witcher 2: Assassins of Kings Enhanced Edition",
        "image": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
        "released": "2012-04-16",
        "rating": 4.17,
        "genres": "RPG",
        "platforms": "macOS, PC, Xbox 360",
        "createdInDatabase": false
    },
    {
        "id": 19103,
        "name": "Half-Life 2: Lost Coast",
        "image": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
        "released": "2005-10-27",
        "rating": 3.45,
        "genres": "Action",
        "platforms": "macOS, Linux, PC",
        "createdInDatabase": false
    },
    {
        "id": 11973,
        "name": "Middle-earth: Shadow of Mordor",
        "image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        "released": "2014-09-30",
        "rating": 3.89,
        "genres": "Action, RPG",
        "platforms": "Linux, Xbox One, Xbox 360, PlayStation 3, PlayStation 4, macOS, PC",
        "createdInDatabase": false
    },
    {
        "id": 416,
        "name": "Grand Theft Auto: San Andreas",
        "image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        "released": "2004-10-26",
        "rating": 4.51,
        "genres": "Action, Adventure",
        "platforms": "Xbox One, Android, Xbox, iOS, PC, macOS, Xbox 360, PlayStation 2, PlayStation 3, PlayStation 4",
        "createdInDatabase": false
    },
    {
        "id": 17822,
        "name": "The Witcher: Enhanced Edition Director's Cut",
        "image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
        "released": "2008-09-16",
        "rating": 4.07,
        "genres": "Action, RPG",
        "platforms": "PC, macOS",
        "createdInDatabase": false
    },
    {
        "id": 4427,
        "name": "BioShock 2",
        "image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        "released": "2010-02-09",
        "rating": 4.07,
        "genres": "Action, Shooter",
        "platforms": "PlayStation 4, Xbox One, Nintendo Switch, PC, macOS, Xbox 360, PlayStation 3",
        "createdInDatabase": false
    },
    {
        "id": 19710,
        "name": "Half-Life 2: Episode One",
        "image": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
        "released": "2006-06-01",
        "rating": 4.38,
        "genres": "Action, Shooter",
        "platforms": "Linux, PC, Xbox 360, Android, macOS",
        "createdInDatabase": false
    },
    {
        "id": "730d35dc-08b6-4c5c-88fb-caacfc710ff9",
        "name": "Lucas Beckford",
        "description": "the best game so long on all the hystory of the entire planet",
        "released": "2022-12-02",
        "rating": 5,
        "platforms": "PC",
        "image": "https://www.welivesecurity.com/wp-content/uploads/2021/08/Ataques-compañías-videojuegos-por-qué-son-blanco-atractivo.jpg",
        "createdInDatabase": true,
        "genres": "Strategy, RPG"
    },
    {
        "id": "10b44b9b-626a-4940-ba86-3c80796b9b27",
        "name": "Super Mario Bros",
        "description": "A good old game",
        "released": null,
        "rating": null,
        "platforms": "Nes",
        "image": null,
        "createdInDatabase": true,
        "genres": ""
    }
];

export default Games;
