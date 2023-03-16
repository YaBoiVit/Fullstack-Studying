const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

const UsersRoutes = require('./routes/UsersRoute');
app.use(UsersRoutes);

const TasksRoutes = require('./routes/TasksRoute');
app.use(TasksRoutes);


app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(5000);
