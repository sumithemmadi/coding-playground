require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,        
    optionSuccessStatus:200
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', routes)

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})