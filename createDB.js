var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//
// });
//
//
// Create Collection
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbase = db.db("UserDB"); //here
//     dbase.createCollection("users", function(err, res) {
//         if (err) throw err;
//         console.log("User Table created Successfully");
//         db.close();
//     });
// });

// // Inserting a single record
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var person = {
        name: "Anthony Ajayi",
        email: "tundeawopegba@gmail.com",
        password: "Tunsco"
    };
    var dbase = db.db("UserDB"); //here
    dbase.collection("users").insertOne(person, function(err, res) {
        if (err) throw err;
        console.log("One User Added Successfully");
    });
    db.close();

});



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("UserDB"); //here
    dbase.createCollection("users", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});