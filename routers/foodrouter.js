const express = require('express');
const router = express.Router();
const Food = require("../models/foodmodel");

//GET All
router.get('/', (req, res) => {
	Food.find().exec((err, data) => {
		if(err) return res.status(400).send(err);
		res.status(200).send(data);
	});
});

//GET 1
router.get(':_id/', (req, res) => {
	Food.findById(req.params._id).exec((err, data) => {
		if (err) return res.status(400).send(err);
		res.status(200).send(data);
	});
});

//POST (create new data)
router.post('/', (req, res) => {
	var obj = new Food(req.body);
	obj.save((err, data) => {
		if (err) return res.status(400).send(err);
		res.status(200).send(data);
	});
});

//PUT (update current data)
router.put('/:_id', (req, res) => {
	Food.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
		if (err) return res.status(400).send(err);
		res.status(200).send(data);
	});
});

router.put('/:_id/price', (req, res) => {
        Food.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
                if (err) return res.status(400).send(err);
                res.status(200).send(data);
        });
});

//DELETE (delete 1 data)
router.delete('/:_id', (req, res) => {
	Food.findByIdAndDelete(req.params._id, (err, data) => {
		if (err) return res.status(400).send(err);
		res.status(200).sen('delete data');
	});
});

module.exports = router;
