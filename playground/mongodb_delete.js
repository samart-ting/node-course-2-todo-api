// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb successfully');

    // deleteMany
    //  db.collection('Users').deleteMany({
    //      text: 'Eat lunch'
    //  }).then((results) => {
    //      console.log(results);
    //  }, (err) => {
    //      console.log('Unable to delete todos', err);
    //  });

     // deleteOne
    //  db.collection('Todos').deleteOne({
    //      text: 'Something to do'
    //  }).then((results) => {
    //      console.log(results);
    //  }, (err) => {
    //      console.log('Unable to delete todos', err);
    //  });

     // findAndDeleteOne
    //  db.collection('Todos').findOneAndDelete({complete: true})
    //  .then((results) => {
    //     console.log(results);
    //  }, (err) => {
    //      console.log('Unable to delete todos', err);
    //  });

    db.collection('Users').deleteMany({
         name: 'Ting'
     }).then((results) => {
         console.log(results);
     }, (err) => {
         console.log('Unable to delete todos', err);
     });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId('58d7ea6d3bac007d8062dedc')})
     .then((results) => {
        console.log(results);
     }, (err) => {
         console.log('Unable to delete todos', err);
     });
    
    // db.close();
});