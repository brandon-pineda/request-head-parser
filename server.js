const express = require('express')
const os = require('os')
const app = new express()

app.set('port', (process.env.PORT || 8080));
app.get('/api/whoami/',(req, res) => {
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress
    var lang = req.headers["accept-language"]
    var system = os.platform()
     
    res.json({
        'IP address': ip,
        'Language': lang,
        'Operating System': system
    })
})

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
})