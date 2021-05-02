
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
jest.setTimeout(600000)

mongoose
  .connect('mongodb://127.0.0.1:27017/test_db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));