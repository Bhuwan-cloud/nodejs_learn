//  lets create a basic HTTP server using node js 
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) =>{

//  now we will fetch our desired things in the request object by following functions 
   console.log(req.url)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    // page routing using node js 
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> This text will print in localhost port 3000 </h1>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> This is about page of website </h1> ')
    }
    //  lets serve a html page using node js , we can read file and parse it to string 
    else if(req.url == '/hello'){

         const data = fs.readFileSync('index.html')
        res.statusCode = 200;
        res.end(data.toString())
    }
    else{
        res.statusCode = 404;
        res.end('<h1> This page is not found  </h1> ')
    }
});

server.listen(port, ()=>{
    console.log('server is listening on port no:'+ port )
});
