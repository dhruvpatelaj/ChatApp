var express = require('express')
var app = express()


app.use(express.static(__dirname))

//* the port it is listening on
app.listen(3000, () => {
    console.log("Server is listening")
})