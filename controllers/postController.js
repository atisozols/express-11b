const knex = require('../config/knex');

const getAllPosts = (req, res) => {
    try {
        knex.select('*')
        .from('blog_posts')
        .then((rows) => {
            res.send(rows);
        })
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const getPostById = (req, res) => {
    try {
        const postId = req.params.id;
        
        knex('blog_posts')
        .where({id: postId})
        .first('*')
        .then((row) => {
            res.send(row);
        })
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const addPost = (req, res) => {
    try {
        knex('blog_posts').insert({title: req.body.title, body: req.body.body}).then(
            res.status(201).send({title: req.body.title, body: req.body.body})
        );
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

module.exports = { getAllPosts, getPostById, addPost }