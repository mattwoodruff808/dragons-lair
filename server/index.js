require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      app = express(),
      PORT = 4000;

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));