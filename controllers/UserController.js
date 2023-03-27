const response = require('./../responce')
const db = require('../settings/config')

exports.users = (req,res)=>{

db.query('SELECT * FROM bh8pzn9jfci7qpzb9jo2.Users', (error,rows,fields) =>{
    if(error){
        response.statusError(rows,res,400);
    }else{
        response.status(rows,res);
    }
})

}
