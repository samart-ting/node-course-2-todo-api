var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./model/todo');
var { User } = require('./model/user');

var app = express();
const port = process.env.PORT || 3000;

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

// GET /todos/:id
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

// DEL /todos/:id
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.status(200).send(todo);
    }).catch((e) => {
        res.status(400).send();
    });
});


app.listen(port, () => {
    console.log(`Start listen at port ${port}`);
});

module.exports = { app };