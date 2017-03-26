// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connect to mongodb successfully');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('58d7f1f83bac007d8062e10f')
    // }, {
    //     $set: {
    //         complete: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('58d7ea5a3bac007d8062ded3')
    }, {
        $set: {
            name: 'Ting'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});