const express = require('express');

const app = express();

const PORT =process.env.PORT || 5000;

app.listen( PORT, ()=>console.log(`App has been started on port ${5000}...`) );
    
