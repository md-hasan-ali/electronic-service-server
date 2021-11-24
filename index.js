// Require Necessary File 
const express = require('express');
const app = express();
// const { MongoClient } = require('mongodb');
// require('dotenv').config()
const cors = require('cors')
// const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;

// Middle Ware 
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('electronic service server is runing..')
})
app.listen(port, () => {
    console.log('listening the port', port)
})