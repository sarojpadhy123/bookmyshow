const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;

const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/Auth');
require('dotenv').config();
require('./db')



app.use(bodyParser.json());
// This Origin Only allowed to access The Backend
const allowedOrigins = ['http://localhost:3000']; 

// Configure CORS with credentials
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);
app.use(cookieParser());

//auth Api 
app.use('/auth',authRoutes);

//Api Testing 
app.get('/', (req, res) => {
    res.json({message :"The Api Is Working"});
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});