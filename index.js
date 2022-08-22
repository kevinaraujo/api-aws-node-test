const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return response.json({ message: 'Server is up' })
})

app.listen(3333)