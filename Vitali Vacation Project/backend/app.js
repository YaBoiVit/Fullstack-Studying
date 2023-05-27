let express = require('express');
let cors = require('cors')
let bodyParser = require('body-parser');
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/public', express.static('public'));


const UsersRoute = require('./routes/UsersRoute');
app.use(UsersRoute);

const VacationRoute = require('./routes/VacationRoute');
app.use(VacationRoute);

const FollowRoute = require('./routes/FollowRoute');
app.use(FollowRoute);

app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(5000);
