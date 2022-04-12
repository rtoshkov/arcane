const { Schema, model, Types: {ObjectId} } = require('mongoose');

const userSchema = new Schema({
    username: {type: String, minlength: [3, 'Username should be at least 3 characters']},
    email:{
        type: String,
        validate: {
            validator: function (value) {
                let pattern = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/
                return pattern.test(value);
            },
            message: 'Email not correct'
        }
    },
    hashedPassword: {type: String, required:true},
    figurines: {type: [ObjectId], ref: 'Figure', default: []},
});


userSchema.index({ username: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;
