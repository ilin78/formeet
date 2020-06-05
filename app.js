const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const io = require('socket.io')//(5000)

// io.on('connection', socket=> console.log(socket.id))

const MONGO_URI =   "mongodb+srv://ilinoa:sb2vcllo@cluster0-bd1jx.azure.mongodb.net/app?retryWrites=true&w=majority"

const PORT = 5000;

async function start() {
    /*
    try  {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }) // подождать пока promise завершится
        app.listen(PORT, ()=>console.log(`App has been started on port ${5000}...`))
    } catch(e) {
        console.log('server error', e.message);
        process.exit(1);
    }
    */
}
app.listen(PORT, ()=>console.log(`App has been started on port ${5000}...`))


//start();


