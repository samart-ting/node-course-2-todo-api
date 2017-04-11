var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./model/todo');
var { User } = require('./model/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send(todos)
    }, (e) => {
        res.status(400).send(e);
    });
})

// GET /todos/{id}
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Valid id using isValid
    if(!ObjectID.isValid(id)){
        // 404 - send back empty body
        return res.status(404).send();
    }
    
      
    // findById
    Todo.findById(id).then((todo) => {
      if(!todo){// error
        // 400 - send empty body back
        return res.status(404).send();
      }

      // success
      res.send({todo});
        // if todo - send it back
        // if no todo - send back 404 with empty body
      
    }).catch((e) => {
        res.status(400).send();
    });
});


app.listen(3000, () => {
    console.log('Start listen at port 3000');
});

module.exports = { app };