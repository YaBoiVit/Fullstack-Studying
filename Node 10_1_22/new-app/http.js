const cors = require('cors');
const express = require('express');


var app = express();
var users = []
app.use(cors())
app.use(express.json());

app.route('/').get((req, res) => {
    console.log("hello node")
    res.send(
        { 
            name: 'vitali', 
            age: "24",
            mail:"vit@gmail.com"
        }
    );
});


app.route('/AddUserGrade').get((req, res) => {
    let user ={
        name: req.query.name,
        grade: req.query.grade
    }
    users.push(user)
    res.send("User added");
});
app.route('/showAllUsers').get((req, res) => {
    res.send({
        users
    }
    );
});




app.listen(5000);