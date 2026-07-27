const express = require('express');

const app = express();

const apiRoutes = require('./routes');

const { ServerConfig } = require('./config');

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,()=>{
  console.log(`Server started successfully on PORT : ${ServerConfig.PORT}`);
});
