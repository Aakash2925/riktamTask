
const express = require('express');
require('./env.js')
const bodyParser = require('body-parser');
// import userRouter from './src/features/users/user.route.js';
const userRouter = require('./src/routes/userRoute.js');
const connectUsingMongoose  = require('./src/config/mongoose.config.js');
const groupRouter = require('./src/routes/groupRoute.js');
const chatRouter = require('./src/routes/chatRoute.js');
const server = express(); // starting the serve
server.use(bodyParser.json()); // for parsing the json sent from postman in json format
server.use(express.urlencoded({ extended: true }));

server.use('/api/user', userRouter); // user Route middleware
server.use('/api/group', groupRouter);// group Route middleware
server.use('/api/chat', chatRouter); // chat Route middleware
server.listen(2100, () => {
    console.log("Server is listening on Port 2100!");
    connectUsingMongoose();
})