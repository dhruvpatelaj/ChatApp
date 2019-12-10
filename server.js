
//* load up express
var express = require('express')

//* store express calls
var app = express()

//* use the html page
app.use(express.static(__dirname))

//place holder messages lists
var messages = [
    {name: 'Timon', message: 'Sista'},
    {name: 'Pumba', message: 'Brudda'}

]

/**  
 * *create a new html page: /message
 * allows for requests and responses.
*/
app.get('/messages', (req, res) => {
    res.send(messages);
})

//* the port it is listening on
app.listen(3000, () => {
    console.log("Server is listening")
})