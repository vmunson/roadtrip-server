require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bp = require('body-parser');

app.use(bp.json());
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'))
app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/sessions'));
app.use('/api/player', require('./routes/playerInfo'))

console.log(process.env.TEST)

http.listen(3000, () => {
    console.log('Server is running on port 3000')
})