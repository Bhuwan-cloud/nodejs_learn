//  lets create a basic HTTP server using node js 

const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) =>{
    //  we can print request and response in JSON object format using following methods 
//    console.log(res)
//    console.log(req)
//  now we will fetch our desired things in the request object by following functions 

//    console.log(req.url)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This text will print in localhost port 3000 </h1>')
});

server.listen(port, ()=>{
    console.log('server is listening on port no:'+ port )
});
