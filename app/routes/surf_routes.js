module.exports = function(app) {
  app.get('/surf', (req, res) => {
    const lat = req.query.lat;
    const long = req.query.long;
    const dist = req.query.dist;

    var spit_cast_url = `http://api.spitcast.com/api/spot-forecast/search?latitude=${lat}&longitude=${long}&distance=${dist}`;

   $.ajax({
      url: spit_cast_url,
      dataType: 'json',
      data: data,
      success: function() {
        res.send("Hey you!");
      }
    });

  });
}