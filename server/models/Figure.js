const {model, Schema, Types: {ObjectId}} = require('mongoose');

const figureSchema = new Schema(
    {
        name: {type: String, minlength: [3, 'The Name should be at least 3 characters']},
        image: {
            type: String,
            validate: {
                validator: function (value) {
                    let pattern = /^https?:\/\//;
                    return pattern.test(value);
                },
                message: 'The link should start with http or https'
            }
        },
        resin: {type: String},
        description: {type: String, required: true, minlength: [10, 'Description must be at least 10 characters long']},
        owner: {type: ObjectId, ref: 'User'},
        comments: {type: [ObjectId], ref: 'Comment'},
    }
)

const Figure = model('Figure', figureSchema);

module.exports = Figure;