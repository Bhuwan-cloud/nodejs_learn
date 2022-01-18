const fs = require("fs");

// fs.readFile('file path', 'utf8', callback);
// // here we have used arrow function as callback
// --------------------------------------------------------------------------------------
fs.readFile("./bhuwan.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(err, data);
});
// --------------------------------------------------------------------------------------

a = fs.readFileSync("bhuwan.txt");
console.log(a.toString());
// --------------------------------------------------------------------------------------
//    sync function actually forces the callback to execute at its sequential order

//  about writeFIle 

// --------------------------------------------------------------------------------------
fs.writeFile('bhuwan2.txt',"This is data inserted  ", ()=>{
    console.log("now text is written to file")
}); 
  // --------------------------------------------------------------------------------------
 
console.log(" Hello node js ");
