const con = require('../utils/databse')

exports.GetAllTasks = async (req, res) => {
    let tasks = await con.execute(`SELECT * FROM tasks`)
    res.send(tasks[0]);
}


exports.InsertTask = async (req, res) => {
    let task = req.query.task;
    let userID = req.query.userID;

    let insert = await con.execute(`INSERT INTO tasks(task,userID) VALUES (?,?)`, [task,userID])
    res.send(insert[0]);
}