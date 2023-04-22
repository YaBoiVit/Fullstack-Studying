const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

const BooksRoute = require('./routes/BooksRoute');
app.use(BooksRoute);

const WritersRoute = require('./routes/WritersRoute');
app.use(WritersRoute);


app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(5000);
