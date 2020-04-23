// modules
const express = require('express');
const router = express.Router();

//services
const fligths = require('../services/readRoutes');
require('../services/writeRoutes');
const getSmalletFlight = require('../services/getSmallestFligth');


// leitura de rotas e retorno da ou das rotas mais baratas
router.get('/quote/:from/:to', async (req, res) => {
    try {
        const fligthsArray = await fligths();
        const { from, to } = req.params;
        let result = getSmalletFlight(fligthsArray, from, to);
        if (result.length === 0) {
            return res.status(200).send({ success: true, result: 'Voo não encontrado' });
        }
        return res.status(200).send({ success: true, result });
    } catch (err) {
        res.status(400).send( {success: false, err: err.message} );
    }

});

// post de uma rota por vez
router.post('/route', async (req, res) => {
    try {
        if (!req.body.from){
           return res.status(400).send( {success: false, err: 'campo from está faltando'} );
        }
        if (!req.body.to){
            return res.status(400).send( {success: false, err: 'campo to está faltando'} );
        }
        if (!req.body.price){
            return res.status(400).send( {success: false, err: 'campo price está faltando'} );
        }
        
        if (!req.body.connection){
            const { from, to, price } = req.body;
            let result = await writeNormalRoute(from, to, price.toString());
            res.status(200).send({ success: true, routes: result });
        } else {
            const { from, to, connection, price } = req.body;
            let result = await writeConnectionRoute(from, to, connection, price.toString());
            return res.status(200).send({ success: true, routes: result });
        }
    } catch (err) {
        console.log('ERREEEEEEROOOOOO', err);
        return res.status(400).send( {success: false, err: err.message} );
    }

});


module.exports = app => app.use('/', router);



