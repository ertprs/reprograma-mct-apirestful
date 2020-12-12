

const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API MCT",
        version: "Teste7"
    });
});

module.exports = router;