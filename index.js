const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

// Fill in your request handlers here
let updates = [];


app.post('/updates', function (req, res) {

    let updateQuery = (req.body.clientUpdates.length - updates.length)
    const client = req.body.clientUpdates


    while (updateQuery > 0) {
        updates.push(client[client.length - updateQuery - 1])
        updateQuery--
        console.log(updates)
    }

    res.send({

        updates: updates
    })
})


app.listen(port, () => console.log("it's working, yo"))