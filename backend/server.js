const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes')

dotenv.config();
app.use(express.json());

require('./models/db/config')
// routes
app.use('/api/user/',userRoutes)
// 
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`port is running ${PORT}`)
})