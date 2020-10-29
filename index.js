const express = require('express');
require('dotenv').config();

const server = express()
const PORT = process.env.PORT || 3300
const path = require('path')


server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api', (req, res) => {
    res.json({message: 'API is up!'})
})

server.get('*', (req, res) => {
    res.sendFile(path.json(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

