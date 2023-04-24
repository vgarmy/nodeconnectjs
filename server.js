var http = require('http')

var url = require('url')



http.createServer(function(req, res){

    var route = req.url

    if (route==='/'){
        res.end('This is info from backend')
    }
    if (route==='/getusrernames'){
        var username = ['messi', 'maradona', 'batista']
        res.end(JSON.stringify(username))
    }
    console.log('Connnect working in port 5000')
}).listen(5000)