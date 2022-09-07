const express = require('express');
const app = express();
const port = 3000 ;
const db = require('./models');
const cors = require('cors');


var crosOptions = {
    origin: 'http://localhost:4200',
}
app.use(express.json());
app.use(cors(crosOptions));
db.sequelize.sync({force : true}).then(() => {
    console.log('drop and re-Sync database');
})
.catch(err => {
    console.log('failed to sync database'+err.message);
});
require('./routes/books.routes')(app);
app.listen(port , () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
