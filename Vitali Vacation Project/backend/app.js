const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

const UsersRoute = require('./routes/UsersRoute');
app.use(UsersRoute);

const VacationRoute = require('./routes/VacationRoute');
app.use(VacationRoute);


app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(5000);
