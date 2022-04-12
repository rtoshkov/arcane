const {model, Schema, Types: {ObjectId}} = require('mongoose');

const commentSchema = new Schema(
    {
        text: {type: String, minlength: [3, 'The comment should be at least 3 characters']},
        owner: {type: ObjectId, ref: 'User'},
    }
)


const Comment = model('Comment', commentSchema);
module.exports = Comment;