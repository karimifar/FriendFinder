var users = require("../data/friends")


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        //fill the json data
        res.json(users )
    });

    app.post("/api/friends", function(req, res){
        res.json(users);
        var newUser = req.body;
        users.push(newUser);
        console.log("you sent: " + newUser, users)
    })
}