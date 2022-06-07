const router = require('express').Router();
const data = require('../data/data');
const Products = require('../models/allData')


router.post('/alldata', async (req, res) => {
    const result = await Products.create(data);
    res.status(200).json(result)
})

router.get('/alldata', async (req, res) => {
    try {
        const allProducts = await Products.find();
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(501).json('something went wrong')
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        let result = await Products.findById(req.params.id);
        res.status(200).json(result)

    } catch (error) {
        res.status(404).json('something went wrong')
    }

})



module.exports = router;