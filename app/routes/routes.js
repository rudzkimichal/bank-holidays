const axios = require('axios');

function get_data(url, params = null) {
  axios.get(url)
  .then(function(res) {
    return res;
  })
  .then(function(error) {
    console.log(error);
  })
}

module.exports = function(app) {
  app.get('/all', function() {
    get_data('https://www.gov.uk/bank-holidays.json');
  })
}
