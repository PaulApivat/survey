// import express package
const express = require('express');
const knex = require('knex');           //require from local install
const helmet = require('helmet');

//database from DB Browser
const dbConfig = require('./knexfile'); //require from knexfile.js

const server = express();
const db = knex(dbConfig.development)

// CORS stuff
const cors = require('cors')
server.use(cors())

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

    if (feature.model_id && feature.battery && feature.design && feature.useful && feature.speed && feature.weight) {

    db('features').insert(feature)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert Features"});
    })

    } else {
        res.status(400).json({message: "status 400: missing model_id or one other model description"})
    }
});

// INSERT INTO data
server.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('data info', data)

    if (data.battery && data.design && data.useful && data.speed && data.weight) {

    db('data').insert(data)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert Data"});
    })

    } else {
        res.status(400).json({message: "status 400: missing data description"})
    }
});




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

// GET /api/data
// SELECT * FROM data
server.get('/api/data', (req, res) => {
    db('data')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Fail to find data"});
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
// server.get('/api/features/:id', (req, res) => {
//     const {id} = req.params;
//     db('features').where('id', id)
//     .then(rows => {
//         res.json(rows)
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json({err: 'Failed to find specific (model) feature'});
//     })
// })

// Experimental
// ******* TRY GET /api/features/:model_id
server.get('/api/features/:model_id', (req, res) => {
    const {model_id} = req.params;
    db('features').where('model_id', model_id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: 'Failed to find specific feature for this particular model'});
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
