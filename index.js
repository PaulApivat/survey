// import express package
const express = require('express');
const knex = require('knex');           //require from local install
const helmet = require('helmet');

//database from DB Browser
const dbConfig = require('./knexfile'); //require from knexfile.js

const server = express();
const db = knex(dbConfig.development)

//middleware
server.use(express.json());
server.use(helmet());

server.get('/', (req , res) => {
    res.send(`We are live on PORT ${port}`)
})

// INSERT INTO models (name)
server.post('/api/models', (req , res) => {
    const model = req.body;
    console.log('model info', model)

    db('models').insert(model)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert model"});
    })
})

// INSERT INTO features (name)
server.post('/api/features', (req , res) => {
    const feature = req.body;
    console.log('feature info', feature)

    db('features').insert(feature)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert Features"});
    })
})


// GET /api/models
// SELECT * FROM models
server.get('/api/models', (req , res) => {
    db('models') 
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Fail to find models"});
    })
})


// GET /api/features
// SELECT * FROM features
server.get('/api/features', (req , res) => {
    db('features') 
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Fail to find features"});
    })
})

// GET /api/models/:id
// SELECT * FROM models WHERE id = '2'
server.get('/api/models/:id', (req, res) => {
    const {id} = req.params;
    db('models').where('id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Failed to find specific model'});
    })
})


// GET /api/features/:id
// SELECT * FROM features WHERE id = '2'
server.get('/api/features/:id', (req, res) => {
    const {id} = req.params;
    db('features').where('id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Failed to find specific (model) feature'});
    })
})


// DELETE /api/models/:id
// DELETE FROM models WHERE id = 2;
server.delete('/api/models/:id', (req , res) => {
    const {id} = req.params;
    db('models').where('id', id).del()
    .then(rowCount => {
        res.status(201).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to delete model"})
    });
})


// DELETE /api/features/:id
// DELETE FROM features WHERE id = 2;
server.delete('/api/features/:id', (req , res) => {
    const {id} = req.params;
    db('features').where('id', id).del()
    .then(rowCount => {
        res.status(201).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to delete (model) feature"})
    });
})



// PUT /api/models/:id
// UPDATE models SET name = 'NEW MODEL'
server.put('/api/models/:id', (req , res) => {
    const {id} = req.params;
    const model = req.body;

    db('models').where('id', id).update(model)
    .then(rowCount => {
        res.status(200).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: 'Failed to update model'});
    })
})


// PUT /api/bears/:id
// UPDATE bears SET name = 'NEW BEAR'
server.put('/api/features/:id', (req , res) => {
    const {id} = req.params;
    const feature = req.body;

    db('features').where('id', id).update(feature)
    .then(rowCount => {
        res.status(200).json(rowCount)
    })
    .catch(err => {
        res.status(500).json({err: 'Failed to update (model) feature'});
    })
})



//listen
const port = 3000;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})
