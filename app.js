const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const PageController = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter.router);
app.use(shopRouter);

app.use(PageController.get404);



app.listen(3001, () => {
    console.log("Server listening on port 3001");
})