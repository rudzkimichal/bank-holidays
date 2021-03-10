const axios = require('axios');


// !! Add encoding !!


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



module.exports = app => {
  app.get('/', (req, resp) => {
    resp.redirect('/all');
  });

  // Data UK-wide

  app.get('/all', async (req, resp) => {
    const data = await get_data();
    resp.json(data);
  });

  // Data by division: England and Wales, Scotland or Northern Ireland

  app.get('/:division', async (req, resp) => {
    const division_data = await get_data_by_division(req.params.division);
    division_data ? resp.json(division_data.events) : resp.redirect('/all');

  });

  app.get('/:division/:year', async (req, resp) => {

    const division_data = await get_data_by_division(req.params.division);
    console.log(division_data.division);
    const items = division_data.events.filter(
      item => item.date.slice(0,4) === req.params.year
    );

    console.log(items);

    division_data ? resp.send(items) : resp.redirect('/all');
  });

  // Fallback

  app.get('*', (req,resp) => resp.redirect('/all'));
}
