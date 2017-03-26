// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb successfully');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     complete: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todos ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Ting',
        age: 28,
        location: "BKK"
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert users ',err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});