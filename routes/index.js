var express = require('express');
var router = express.Router();

router.get('/track/', function(req, res, next) {
    res.json({
        tracks: [
            {
                id: 0,
                name: "Alastaro",
                gameName: "Forza",
                carName: "BMW M3 2015"
            },
            {
                id: 1,
                name: "Hockenheim",
                gameName: "Forza",
                carName: "Opel Corsa 1989"
            },
            {
                id: 2,
                name: "Ouninpohja",
                gameName: "WRC",
                carName: "Ford Sierra Cosworth 1992"
            }
        ]
    });
});

router.get('/track/:id/', function(req, res, next) {
    switch (parseInt(req.params.id, 10)) {
        case 0:
            return res.json({
                id: 0,
                name: "Alastaro",
                gameName: "Forza",
                carName: "BMW M3 2015",
                times: [
                    {
                        id: 0,
                        time: 75023,
                        name: "Ralli-Pekka",
                        date: "2015-11-01"
                    },
                    {
                        id: 1,
                        time: 85023,
                        name: "Raimo Kives",
                        date: "2015-11-01"
                    },
                    {
                        id: 2,
                        time: 88223,
                        name: "Simo Salminen",
                        date: "2015-11-01"
                    },
                    {
                        id: 3,
                        time: 89233,
                        name: "Kaahaaja-Uuno",
                        date: "2015-11-01"
                    },
                    {
                        id: 4,
                        time: 90234,
                        name: "Pera",
                        date: "2015-11-01"
                    },
                    {
                        id: 5,
                        time: 91343,
                        name: "Ristus",
                        date: "2015-11-01"
                    }
                ] 
            });
        case 1:
            return res.json({
                id: 1,
                name: "Hockenheim",
                gameName: "Forza",
                carName: "Opel Corsa 1989",
                times: [
                    {
                        id: 0,
                        time: 75023,
                        name: "Ralli-Pekka",
                        date: "2015-11-01"
                    },
                    {
                        id: 1,
                        time: 78888,
                        name: "Raimo Kives",
                        date: "2015-11-01"
                    }
                ] 
            });
        case 2:
            return res.json({
                id: 2,
                name: "Ouninpohja",
                gameName: "WRC",
                carName: "Ford Sierra Cosworth 1992",
                times: [
                    {
                        id: 0,
                        time: 75023,
                        name: "Ralli-Pekka",
                        date: "2015-11-01"
                    },
                    {
                        id: 1,
                        time: 75123,
                        name: "Raimo Kives",
                        date: "2015-11-01"
                    },
                    {
                        id: 2,
                        time: 82123,
                        name: "Simo Salminen",
                        date: "2015-11-01"
                    },
                    {
                        id: 4,
                        time: 84213,
                        name: "Pera",
                        date: "2015-11-01"
                    },
                    {
                        id: 5,
                        time: 123123,
                        name: "Ristus",
                        date: "2015-11-01"
                    }
                ] 
            });
    }
});

module.exports = router;
