
const express = require('express');
const path = require('path');
const app = express();
// Create an Express application

app.use(express.json());

app.use(express.static('includes'));
// Define a route to serve the HTML file



app.get('/includes/index.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/includes/index.js'));
});

app.get('/', (req, res) => {
    if(!req.body.latitude){
        console.log(req.body.latitude);
    }
    if(!req.body.longtitude){
        console.log(req.body.longtitude);
    }    
    res.sendFile(path.join(__dirname, 'test.html'));
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});