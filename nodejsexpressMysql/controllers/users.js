//const dbUsers = require('../db/db');

const db = require('../db/dbconnection')

module.exports = {
    users: (req, res) =>{     //Get
       db.query('SELECT * FROM users', (err, results, fields)=>{
            if(err){
                res.send({error: "Ocurrio un error"});
            }
            res.send(results);
       });
    },

    create: (req, res) =>{
        var nombre = req.body.nombre;
        db.query('INSERT INTO users (nombre) VALUES (?)',[nombre], 
            (error, results, fields)=>{
                if(error) res.send(error);
                res.send(results)
            }
        )

    },

    update: (req, res) =>{
        var id = req.body.id;
        var nombre = req.body.nombre;
        db.query('UPDATE users SET nombre = ? WHERE idusers = ?',[nombre,id], 
            (error, results, fields)=>{
                if(error) res.send(error);
                res.send(results)
            }
        )

    },

    delete: (req, res) =>{
        var id = req.body.id;
        db.query('DELETE FROM users  WHERE idusers = ?',[id], 
            (error, results, fields)=>{
                if(error) res.send(error);
                res.send(results)
            }
        )

    },

    postUsers: (req, res) =>{
        
    }
}

/*
module.exports = {
   users : (req, res) => {

    },
    user: (req, res) =>{
    }
}*/
