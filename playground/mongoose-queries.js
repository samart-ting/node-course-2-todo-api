const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

var id = '58d81a431f8c29919b497570';

if(!ObjectID.isValid(id)) {
    console.log('Id not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

var user_id = '58d81fcd3bac007d8062e9dd';

User.findById(user_id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));

