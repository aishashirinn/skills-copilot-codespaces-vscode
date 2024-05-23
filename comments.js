// Create web server
// 1. Load express
// 2. Create an instance of express
// 3. Create a route
// 4. Create a response
// 5. Listen to the port

var express = require('express');
var app = express();

var comments = [
    {name: 'John', comment: 'Hello!'},
    {name: 'Mary', comment: 'Hi!'},
    {name: 'Joe', comment: 'Hey!'}
];

app.get('/comments', function(request, response) {
    response.json(comments);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});