// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb successfully');

    // db.collection('Todos').find({
    //     _id: new ObjectId('58d7d3eb4252fd7e3f5ae559')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    //  db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to count todos', err);
    // });

     db.collection('Users').find({
         name: 'Ting'
     }).toArray().then((docs) => {
         console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
         console.log('Unable to fetch todos', err);
     });
    
    // db.close();
});