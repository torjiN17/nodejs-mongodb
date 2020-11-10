const mongoose = require('mongoose');
const  foodSchema = mongoose.Schema(
	{
		name: {
			type: String
		},
		price: {
			type: Number
		}
	},
	{
		collection: "FOODS"
	}
);

const Food = mongoose.model("foods", foodSchema);
module.exports = Food;
