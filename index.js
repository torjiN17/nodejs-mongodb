const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongo_uri = "mongodb+srv://mongo-user:mongo-password@mycluster-1.bwikx.mongodb.net/MONGO-DB?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true}).then(
	() => {
		console.log("[success] task 2 : connected to the database ");
	},
	error => {
		console.log("[failed] task 2 " + error);
		process.exit();
	}
)

const app = express();
//app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extexded: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

const port = process.emvPORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );

const Food = require("./routers/foodrouter");
app.use('/api/food', Food);

app.use((req, res, next) => {
	var err = new Error('ไม่พบ path ที่ต้องการ');
	err.status = 404;
	next(err);
});
