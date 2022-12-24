//mongoDB connection with a mongoose wrapper
const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/green-social-network-api';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection;