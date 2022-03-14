const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// Intialize database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/api-social', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// For logging mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));