const express = require('express');
// const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.sender(index));

app.listen(3000, () => console.log('App is listening on port 3000 '));