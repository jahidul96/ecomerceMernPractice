const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')


// routes 
const allDataHandler = require('./routes/alldata')


const app = express();
app.use(cors())



app.use(express.json())
app.use('/', allDataHandler)

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('db connected'))
    .catch((err) => console.log(`something went wrong ${err.message}`))


app.listen(process.env.PORT, () => {
    console.log(`server is running`)
})