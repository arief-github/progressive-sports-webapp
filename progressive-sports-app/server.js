const path = require('path');
const express = require('express');
const { join } = require('path');
const PORT = 5000;
const app = express();

app.use(express.static('dist'));
app.get('/', (request, response) => {
response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

// const expressStaticGzip = require ('express-static-gzip');
// app.use(expressStaticGzip('dist',{
//     enableGzip:true,
// })    
//     )


const listener = app.listen(PORT, () => {
console.log(`Your app is listening on port ${PORT}`);
});
