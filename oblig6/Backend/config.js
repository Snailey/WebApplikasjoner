import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/poll_database',
};
