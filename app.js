const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
})



app.listen(3001, () => {
    console.log("Server listening on port 3001");
})