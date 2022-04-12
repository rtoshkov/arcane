const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'FIGURES CATALOGUE'})
})

router.post('/', (req, res) => {
    res.json({message: 'FIGURES POST'})
})

router.get('/:id', (req, res) => {
    res.json({message: 'FIGURES GET ITEM'})
})

router.put('/:id', (req, res) => {
    res.json({message: 'FIGURES UPDATE ITEM'})
})

module.exports = router;