const express = require('express');
const router = express.Router();


router.get('/quote/:ida/:volta', async (req, res)=>{
    console.log('GET VOOS', req.params);
});


router.post('/route', (req, res)=>{
    console.log('POST VOO', req.body);
});


module.exports = app => app.use('/', router);



