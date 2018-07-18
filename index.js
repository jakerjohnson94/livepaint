const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())


let updates = [];

app.post('/updates', function (req, res) {

    const clientUpdates = req.body.clientUpdates;

    clientUpdates.forEach(update => {
        if (!updates.includes(update)) updates.push(update)
    });

    res.send({
        updates: updates,
    });
});

app.listen(port, () => console.log("it's working, yo"))