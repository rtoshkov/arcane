const router = require('express').Router();
const api = require('../services/figure.js');
const {addFigureToUser} = require('../services/user.js')
const mapErrors = require("../utils/maperrors");
const {isUser} = require("../middleware/isuser");

router.get('/', async (req, res) => {
    try{
        const data = await api.getAll();
        res.json(data);
    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }
});

router.post('/', isUser(), async (req, res) => {
    const figure = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        resin: req.body.resin,
        owner: req.user._id,
    }
    try{
        const result = await api.create(figure);
        await addFigureToUser(req.user._id, result._id)
        res.status(201).json(result);
    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const result = await api.getPopulatedById(req.params.id);
        res.status(200).json(result);
    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }

});

router.put('/:id', isUser(), async (req, res) => {
    const figure = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        resin: req.body.resin,
    }
    const id = req.params.id;

    try{
        const existing = await api.getById(id);
        if(req.user._id !== existing.owner.toString()){
            throw new Error('You are not the owner.')
        }

        const result = await api.update(req.params.id, figure);

        figure.owner = req.body._id;

        res.status(200).json(result);
    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }
});


router.delete('/:id', isUser(), async (req, res) => {
    try{
        const id = req.params.id;
        const existing = await api.getById(id);

        if(req.user._id !== existing.owner.toString()){
            throw new Error('You are not the owner.')
        }

        const result = await api.deleteById(req.params.id);
        res.status(200).json(result);
    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }
});

router.post('/comment/:id', isUser(), async (req, res) => {
    try{
        const existing = await api.getById(req.params.id);

        const comment = {
            text: req.body.text,
            owner: req.user._id,
        }

        const result = await api.addComment(comment);

        existing.comments.push(result._id);
        await existing.save();

        res.status(201).json(result);

    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }
});

module.exports = router;