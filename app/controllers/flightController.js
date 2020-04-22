const express = require('express');
const router = express.Router();
const fligths = require('../services/readRoutes');
const postFlight = require('../services/writeRoutes');

router.get('/quote/:from/:to', async (req, res) => {
    const fligthsArray = await fligths();
    console.log('FLIGHTS', fligthsArray);
    // smallPrice - fazer função pra isso depois
    
    const {from, to} = req.params;
    // let priceArray = [];
    // let sameFlight = [];
    // for (let i = 0; i < fligthsArray.length; i++) {
    //     let el = fligthsArray[i]
    //     if (el.from === from && el.to === to){
    //         sameFlight.push(el);
    //         priceArray.push(el.price);

    //     }
        
    // }
    // let sortedPrice = priceArray.sort((a, b)=> a - b);
    // let result = sameFlight.filter(el => {
    //     return el.price === sortedPrice[0];
    // });
    
    res.status(200).send({ success: true});
});


router.post('/route', async (req, res) => {
    try {
        const { from, to, price } = req.body;
        if (
            typeof (from) !== 'string' ||
            typeof (to) !== 'string' ||
            (typeof (from) !== 'string' && typeof (to) !== 'string') ||
            typeof (price) !== 'number'
        ) {
            return res.status(400).send({ success: false, error: 'body mal formatado' });
        }
        await postFlight(from, to, price.toString());
        res.status(200).send({ success: true, route: req.body });
    } catch (err) {
        console.log('ERR', err);
        res.status(400).send(err);
    }

});


module.exports = app => app.use('/', router);



