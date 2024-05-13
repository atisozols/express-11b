const knex = require('../config/knex');

const getAll = (req, res) => {
    try {
        knex.select('*')
        .from('skolens')
        .then((rows) => {
            res.send(rows);
        })
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const getStudentById = (req, res) => {
    try {
        const studentId = req.params.id;
        
        knex('skolens')
        .where({id: studentId})
        .first()
        .then((row) => {
            if(row){
                res.send(row);
            } else{
                res.status(404).send({message: "Not found"})
            }
        })
        
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const addStudent = (req, res) => {
    try {
        knex('skolens').insert({full_name: req.body.name, class_id: req.body.class}).then(
            res.status(201).send({full_name: req.body.name, class_id: req.body.class})
        );
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

module.exports = { getAll, getStudentById, addStudent }