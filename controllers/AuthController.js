const response = require('./../responce')
const db = require('../settings/config')
const jwt = require('jsonwebtoken');



exports.Auth = (req,res)=>{
    const token = jwt.sign(
        {
            id: 1,
        },
        'wsr-food',
        {
            expiresIn: '30d',
        },
    );
        const {login,password} = req.query;
        db.query(`SELECT * FROM bh8pzn9jfci7qpzb9jo2.Users where email = '${login}' and password = '${password}'`, (error,rows,fields) =>{
            if(error){
                response.statusError(rows,res,400);
            }
            else{
                if(rows.length ==0){
                    response.statusError(rows,res,401);
                }
                else{
                    response.statuslog(200,res,token);
                }
            }
        })
    
}