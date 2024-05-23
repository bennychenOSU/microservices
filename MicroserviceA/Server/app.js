
/* 
SETUP 
*/

// Express
var express = require('express');  
var app     = express();       
PORT        = 3000;  
const fs = require('fs');             
app.use(express.static('public'));

// app.js    


/*
    ROUTES
*/  
// app.js
app.get('/weather-images', (req, res) => {

    fs.readFile('public/img/' + req.query.svg, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading SVG file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        // Convert SVG content to JSON
        const svgJson = { "svgContent": data };

        // Send the JSON response
        res.json(svgJson);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});