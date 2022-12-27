const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: 'http://localhost:8081'
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes
require('./routes/tutorial.routes')(app);
app.get('/', (req, res) => {
  res.send({ message: "Welcome to bezkoder application!" })
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Process is running on port ${PORT}`)
})