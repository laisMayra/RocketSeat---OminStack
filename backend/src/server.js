const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        "idade": req.query.idade
    });
});


app.listen(3333);