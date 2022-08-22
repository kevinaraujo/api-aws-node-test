const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'Server is up' })
})

app.get('/update', (req, res) => {
    return res.json({ message: 'Already updated' })
})
app.listen(3333)