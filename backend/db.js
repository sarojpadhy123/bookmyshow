const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL,{
    dbName: process.env.DB_NAME
}).then(
    () => {
        console.log('Connected to database');
    }
).catch((err) => {
    console.log('Error connecting to database ' + err);
});

// username
// psarojkumar9
// password
// jnOjgrRKYhQLHsh4
// IP Access List

// Description

// 49.37.116.12/32

// My IP Address

// https://www.cyclic.sh/ for free full stack deployment