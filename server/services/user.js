const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const JWT_SECRET = 'fdjsfndj@#%RFdmfkdskmfkdsmfkdsmfks';
const notAllowed = [];

function createToken(user){
    const signToken = jwt.sign({
        username: user.username,
        email: user.email,
        _id: user._id,
    }, JWT_SECRET)

    return {
        username: user.username,
        email: user.email,
        _id: user._id,
        accessToken: signToken,
    }
}

async function addFigureToUser(userID, figureId){
    const existing = await User.findById(userID);
    existing.figurines.push(figureId);
    existing.save();
}

async function register(username,email,password){
    const existing = await User.findOne({username: new RegExp(`^${username}$`, 'i')})

    if(existing){
        throw new Error('Username already exists');
    }

    const user = new User({
        username,
        email,
        hashedPassword: await bcrypt.hash(password, 10),
    })

    await user.save();
    return createToken(user);
}

async function login(username, password){
    const user = await User.findOne({username: new RegExp(`^${username}$`, 'i')});

    if(!user){
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if(!match){
        throw new Error('Incorrect username or password');
    }

    return createToken(user);
}


async function logout(token){
    notAllowed.push(token);
}

function verifyToken(token){
    if (notAllowed.includes(token)){
        throw new Error('Token is invalid');
    }
    const payload = jwt.verify(token, JWT_SECRET);
    return {
        username: payload.username,
        email: payload.email,
        _id: payload._id,
        accessToken: token,
    }

}

function getById(id){
    return User.findById(id).populate('figurines');
}

module.exports = {
    login,
    register,
    verifyToken,
    logout,
    addFigureToUser,
    getById
}


