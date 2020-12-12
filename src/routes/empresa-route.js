'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/empresa-controller');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin', controller.getById); //'/admin/:id'
router.get('/tags/:tag', controller.getById);
router.post('/', controller.post);
router.put('/', controller.put); // '/:id'
router.delete('/', controller.delete);  //'/: id'


module.exports = router;