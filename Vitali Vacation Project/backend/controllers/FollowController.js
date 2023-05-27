const con = require('../utils/database')

exports.GetFollowers = async (req,res) =>{
    let data = await con.execute(`SELECT * FROM followcompare `)
    followers = data[0];
    res.send(followers)
}
exports.InsertFollower = async (req, res) => {
    const UserID = req.query.UserID;
    const VacationID = req.query.VacationID;
    let insert = await con.execute(`INSERT INTO followcompare (UserID,VacationID) VALUES (?,?)`, [UserID,VacationID])
    res.send(insert[0]); 
}
exports.RemoveFollower = async (req, res) => {
    let UserID = req.query.UserID; 
    let data = await con.execute(`DELETE FROM followcompare WHERE UserID = ${UserID}`)
    res.send(data[0]);
}