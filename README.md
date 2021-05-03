# Gram

# Quick Start 🚀

first clone the repo using `git clone https://github.com/bikash007-gb/Gram.git`

### Install server dependencies

install all dependencies

```bash
npm i
```

### Start server

To start the server, run

```bash
npm start
```

### Run test

To run the test, run

```bash
npm test
```

# API endpoints 🚀

When you run `npm start` the app will be running on `http://localhost:5000/`.

To create a report you have to go to `/reports` route, which is a `POST` request. In response you will get

```json
{
  "status": "success",
  "reportId": "the id of created report"
}
```

Lets see an example. Lets send a request with `Postman`:

```json
{
  "userId": "user-10",
  "marketId": "market-3",
  "marketName": "Assam",
  "cmdtyID": "cmdty-3",
  " marketType": "Mandi",
  "cmdtyName": "mango",
  "priceUnit": "Quintal",
  "convFctr": 100,
  "price": 1600
}
```

In response we got

```json
{
  "status": "success",
  "reportId": "608fa67d543b24326c03e29f"
}
```

If there is already a report exist with same `marketid` and `cmdtyID`, then price will be updated on that report, lets try this

```json
{
  "userId": "user-11",
  "marketId": "market-3",
  "marketName": "Assam",
  "cmdtyID": "cmdty-3",
  " marketType": "Mandi",
  "cmdtyName": "mango",
  "priceUnit": "Pack",
  "convFctr": 50,
  "price": 700
}
```

In response we got

```json
{
  "status": "success",
  "reportId": "608fa67d543b24326c03e29f"
}
```

Now we can view a report with `/reports/:reportId` route, which is a `GET` request. In response we will get the report details

lets try this with recently created report `/reports/608fa67d543b24326c03e29f`

In response we got

```json
{
  "status": "success",
  "report": {
    "users": ["user-10", "user-11"],
    "_id": "608fa67d543b24326c03e29f",
    "marketId": "market-3",
    "marketName": "Assam",
    "cmdtyID": "cmdty-3",
    "cmdtyName": "mango",
    "priceUnit": "kg",
    "price": 15,
    "createdAt": "2021-05-03T07:30:05.036Z",
    "updatedAt": "2021-05-03T07:35:15.138Z"
  }
}
```

# Testing APIs 🚀

Testing is done with `jest` and `supertest`.

In create report we are basically checking the status code, for a successful `POST` request it should return status code `201`.

In get report we are checking the status code which should be `200` for successful `GET` request. And also we are checking the `marketId` and `cmdtyID` which have to be same as the report with that id.

### Author

Bikash Mali
