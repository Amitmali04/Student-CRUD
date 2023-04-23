
require('dotenv').config();
const express  = require('express');
const app = express();
const mongoose = require('mongoose');

require('./Database/Connection');
const student = require('./modals/StudentSchema');

const cors = require('cors');

const router = require('./router/router');
const PORT = 8003;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () =>{
    console.log('Server is Running' , PORT)
})

// ImJwQLZsWmLrJEHQ