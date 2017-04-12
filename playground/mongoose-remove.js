const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '58ede9374ae21ebda6f2bf95'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('58ede88b4ae21ebda6f2bf38').then((todo) => {
//     console.log(todo);
// });