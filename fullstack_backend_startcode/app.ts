
import express = require("express");
import morgan = require('morgan');
import carRoute from './routes/carRoute'
import userRoute from './routes/userRoute'


const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

app.use('/api/cars', carRoute);
app.use('/api/users', userRoute);

export default app;


