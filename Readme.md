
# Bank Holidays

An app retreving data from one of APIs UK Government made open for the public. It shows bank holidays in the country across years 2016-2022.


## Installation
1. Clone this repo - `git clone https://github.com/rudzkimichal/bank-holidays.git`
2. Run `npm install` in project root
3. Run `npm run dev` in order to launch the app
4. Go to [localhost:8080](localhost:8080) - port can be changed in index.js

## Usage

The default route is "/all", showing all the data available to retrieve.
In order to access data by the division, go for one of the following:

1. /england-and-wales
2. /scotland
3. /northern-ireland

Data from each one of these can be further divided by a year - starting from 2016 up to 2022. E.g. bank holidays in Scotland in 2021 would be "/scotland/2021".

## Validation

Division routes are only validated against uppercase, e.g. england-and-Wales will work. Years should be numbers from range 2016-2022.
In case route is invalid (e.g. /northern-ireland/2025) the app redirects to the aforementioned default "/all". Same refers to "/".

## Testing

Tests included in the app validate statuses 200 or 302. To run tests, go for `npm test` in root folder.

Routes can be also tested with REST API testing tools, e.g. Postman.
