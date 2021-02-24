const express = require('express');
const router = express.Router();
const List = require('../models/list');
const ObjectId = require('mongoose').Types.ObjectId;


/**
 * Create a new list
 */
router.post('/', async (req, res) => {
    const list = new List();
    await list.save();
    res.send(list);
});


/**
 * Get a list detail
 */
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const list = await List.findOne({
            _id: id
        });
        res.send(list);
    } catch (e) {
        res.status(404).send('Not Found');
    }
});

/**
 * Update the list
 */
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const list = await List.findOneAndUpdate({
        _id: ObjectId(id)
    }, {
        $set: req.body
    }, {
        new: true
    });
    res.send(list);
});

module.exports = router;
