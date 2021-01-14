require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      {CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));