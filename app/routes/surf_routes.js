module.exports = function(app) {
  var rp = require('request-promise');

  app.get('/surf/forecast/summary', (req, res) => {
    const lat = req.query.lat;
    const long = req.query.long;
    const dist = req.query.dist;

    var spit_cast_url = 'http://api.spitcast.com/api/spot-forecast/search';

    var options = {
        uri: spit_cast_url,
        qs: {
            latitude: lat, // -> uri + '?access_token=xxxxx%20xxxxx'
            longitude: long,
            distance: dist
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (data) {
            console.log(data);
            res.send(data);
        })
        .catch(function (err) {
            // API call failed...
        });

  });
}