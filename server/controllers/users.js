const router = require('express').Router();
const api = require('../services/user.js');
const mapErrors = require("../utils/maperrors");
const {isUser} = require("../middleware/isuser");

router.post('/register', async (req, res) => {
    try {
        if (req.body.password.trim() === '' || req.body.username.trim() === '') {
            throw new Error('Username and password are required');
        }
        const result = await api.register(req.body.username.trim().toLowerCase(), req.body.email.toLowerCase(), req.body.password.trim());
        res.status(201).json(result);

    } catch (err) {
        const error = mapErrors(err);
        res.status(400).json({message: `Invalid parameters ... ${error}`});
    }
});

router.post('/login', async (req, res) => {
    try {
        const result = await api.login(req.body.username.trim().toLowerCase(), req.body.password.trim());
        res.json(result);

    } catch (err) {
        const error = mapErrors(err);
        res.status(400).json({message: 'Invalid username or password'});
    }
});

router.get('/logout',  (req, res) => {
    if(req.user){
        api.logout(req.user.accessToken);
    }
    res.status(204).end();
});

router.get('/profile', isUser(), async(req, res) => {
    try{
        const result = await api.getById(req.user._id);
        res.status(200).json(result);
    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }
});

router.get('/profile/:id', async(req, res) => {
    try{
        const result = await api.getById(req.params.id);
        res.status(200).json(result);
    }catch(err){
        const error = mapErrors(err);
        res.status(400).json({message: error});
    }
});

module.exports = router;