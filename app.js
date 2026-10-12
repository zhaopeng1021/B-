const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cros = require('cors')
app.use(cros())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.listen(3007, () => {
	console.log('http://127.0.0.1:3007')
})