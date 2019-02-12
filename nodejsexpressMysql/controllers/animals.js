const db = require('../db/dbconnection')

module.exports = {
    read: (req, res) =>{     //Get
       db.query('SELECT * FROM zoo_animals', (err, results, fields)=>{
            if(err){
                res.send({error: "Ocurrio un error"});
            }
            res.send(results);
       });
    },

    create: (req, res) =>{
        var name = req.body.nombre;
        var type = req.body.tipo;
        var location = req.body.ubicacion;
        var section = req.body.seccion;
        var description = req.body.descripcion;
        var status = req.body.estado;

        db.query('INSERT INTO zoo_animals (zoo_name, zoo_type, zoo_location, zoo_section, zoo_description, zoo_status )'
                    +'VALUES (?,?,?,?,?,?)',[name, type, location, section, description, status], 
            (error, results, fields)=>{
                if(error) res.send(error);
                res.send(results)
            }
        )

    },

    update: (req, res) =>{
        var id = req.body.id;
        var name = req.body.nombre;
        var type = req.body.tipo;
        var location = req.body.ubicacion;
        var section = req.body.seccion;
        var description = req.body.descripcion;
        var status = req.body.estado;
        db.query('UPDATE zoo_animals SET '
            +'zoo_name = ?, zoo_type = ?, zoo_location= ?, zoo_section = ?, zoo_description = ?, zoo_status = ? '
            +'WHERE idzoo_animals = ?',[name, type, location, section, description, status, id], 
            (error, results, fields)=>{
                if(error) res.send(error);
                res.send(results)
            }
        )

    },

    delete: (req, res) =>{
        var id = req.body.id;
        db.query('DELETE FROM zoo_animals WHERE idzoo_animals = ?',[id], 
            (error, results, fields)=>{
                if(error) res.send(error);
                res.send(results)
            }
        )

    },

    postUsers: (req, res) =>{
        
    }
}
