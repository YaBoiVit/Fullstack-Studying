const con = require('../utils/database')

exports.getFollowers = async (req,res) =>{
    let data = (await con).execute(`
    SELECT 
    followcompare 
    `)

    followers = data[0];
    res.send(followers)
}