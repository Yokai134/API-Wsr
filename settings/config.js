const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"bh8pzn9jfci7qpzb9jo2-mysql.services.clever-cloud.com",
    port:"3306",
    user:"urnoqaplantssriq",
    password:"s2dYOEs9F5acGiqTXVoS",
    database:"bh8pzn9jfci7qpzb9jo2"
})

connection.connect((error) =>{
if(error){
    return console.log('Ошибка подключения');
}else{
    return console.log('Подключение успешно');
}
})

module.exports = connection