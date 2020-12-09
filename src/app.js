const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));



const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "Teste5"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({id: id, item: req.body});
});

const deletar = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});




app.use('/', route);
app.use('/empreendimento', create);
app.use('/empreendimento', put);
app.use('/empreendimento', deletar);

module.exports = app;