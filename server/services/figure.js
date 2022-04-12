const Figure = require('../models/Figure');
const Comment = require('../models/comment');

async function getAll(){
    return Figure.find({});
}

async function create(figure){
    const result = new Figure(figure);
    await result.save();

    return result;
}

async function getPopulatedById(id){
    return Figure.findById(id).populate('comments').populate('owner');
}

async function getById(id){
    return Figure.findById(id)
}


async function update(id, figure){
    const existing = await Figure.findById(id);
    existing.name= figure.name;
    existing.image= figure.image;
    existing.description= figure.description;
    existing.resin= figure.resin;
    //TODO add owner

    await existing.save();
    return existing;
}

async function deleteById(id){
    await Figure.findByIdAndDelete(id);
}


async function addComment(data) {
    const comment = new Comment(data);
    comment.save();
    return comment;
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById,
    addComment,
    getPopulatedById
}

