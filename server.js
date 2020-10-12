// Requires
const express = require('express');

// Server Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// Parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
});