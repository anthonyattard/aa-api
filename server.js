const express    = require ('express');
const bodyParser = require('body-parser');

const app        = express();

const port = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://surf.anthonyattard.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app);

app.listen(port, () => {
  console.log("We are live on " + port);
})