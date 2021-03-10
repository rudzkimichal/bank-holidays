const axios = require('axios');
const router = require('express').Router();

// Retrieve data from API

const get_data = async () => {
  try {
    const response = await axios.get('https://www.gov.uk/bank-holidays.json');
    const data = await response.data;

    return data;
  } catch(err) {
    console.log(err);
  }
}

const get_data_by_division = async (division) => {
  try {
    const data = await get_data();
    const division_data = data[division.toLowerCase()];

    return division_data;
  } catch(err) {
    console.log(err);
  }
}




// Data UK-wide

router.get('/all', async (req, resp) => {
  const data = await get_data();
  resp.json(data);
});

// Data by division: England and Wales, Scotland or Northern Ireland

router.get('/:division', async (req, resp) => {
  const division_data = await get_data_by_division(req.params.division);
  division_data ? resp.json(division_data.events) : resp.redirect('/all');

});

// Data by division for a given year

router.get('/:division/:year', async (req, resp) => {

  const year = parseInt(req.params.year, 10);

  if(req.params.year.length == 4 && year >= 2016 && year <= 2022) {
    const division_data = await get_data_by_division(req.params.division);
    const items = division_data.events.filter(
      item => item.date.slice(0,4) === req.params.year
    );

    resp.send(items);
  } else {
    resp.redirect('/all');
  }
});

// Route / redirect

router.get('/', (req, resp) => {
  resp.redirect('/all');
});

// Fallback

router.get('*', (req,resp) => resp.redirect('/all'));

module.exports = () => router;
