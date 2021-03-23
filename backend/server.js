const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //To connect with mongoDB

//Configures environment variables in the .env file
require('dotenv').config();

//Creates the express server
const app = express();
const port = process.env.PORT || 5000;

//COnfigures the app to use json
app.use(cors());
app.use(express.json());

//Connect with MongoDB atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully')
});

//Getting the database model routes
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

//Starts the app
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});