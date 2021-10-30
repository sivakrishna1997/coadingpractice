const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

const port = process.env.PORT || 3600;
app.listen(port, () => {
    console.log('Server is Up Listinng on PORT ' + port);
})