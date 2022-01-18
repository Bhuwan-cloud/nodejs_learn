import url from "url";
// we have now following parts of URL and we want to create full href for the given URL 
const myURL = new URL('https://github.com');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fhg';
myURL.password = '1234';
// ------------------------------------------------
console.log(myURL.href)
console.log("protocol is "+ myURL.protocol)
console.log("hash is "+ myURL.hash)
console.log("host is "+ myURL.host)
console.log("password is "+ myURL.password)
console.log("port number  is "+ myURL.port)
console.log("JSON is "+ myURL.toJSON)