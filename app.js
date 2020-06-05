const express = require('express');

const app = express();

const PORT = 5000;

app.listen(process.env.PORT || PORT, ()=>console.log(`App has been started on port ${5000}...`))
