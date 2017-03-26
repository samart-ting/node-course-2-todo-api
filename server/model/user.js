const mongoose = require('mongoose');

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User}

// var user = new User({
//     email: 'email@email.com',
//     // complete: false,
//     // completeAt: 123
// });

// user.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (err) => {
//     console.log('Unable to save user', err);
// });