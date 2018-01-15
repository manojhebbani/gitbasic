// // var http  = require('http');
// //
// // var fs = require('fs');
// //
// // // fs.appendFile('sample.txt','Hello Node.js!',function(err){
// // //   if(err) throw err;
// // //   console.log('Saved');
// // // })
// // http.createServer(function(req,res){
// //   fs.readFile('document.html',function(err,data){
// // res.writeHead(200,{'Content-Type':'text/html'});
// // res.write(data);
// // res.end();
// //   });
// // }).listen(8080);
// // var fs = require('fs');
// //
// // fs.open('samplesecond.txt','w',function(err,file){
// //   if(err) throw err;
// //   console.log('Saved!');
// // });
// // var fs = require('fs');
// //
// // fs.rename('first.txt','sample.txt',function(err){
// //   if(err)throw err;
// //
// //   console.log('Deleted successfully!');
// // });
//
// // var http  = require('http');
// // var url   = require('url');
// // var fs    = require('fs');
// //
// // http.createServer(function(req,res){
// //
// //   var addr  = url.parse(req.url,true);
// //
// //   var filename  = '.' + addr.pathname;
// //
// //   fs.readFile(filename,function(err,data){
// //
// //   if( err )
// //   {
// //
// // res.writeHead(404,{'Content-Type':'text/html'});
// //
// // res.write("Something Wrong!");
// //
// // return res.end();
// //
// //   }
// //
// //   res.writeHead(200,{'Content-Type':'text/html'});
// //
// //   res.write(data);
// //
// //   return res.end();
// //
// //   });
// //
// // }).listen(8080);
//
// // uc = require('upper-case');
// //
// // console.log(uc("Manoj"));
//
//
// // var events = require('events');
// //
// // var eventEmitter  = new events.EventEmitter();
// //
// //
// // var myEvent = function(){
// //   console.log('Event is Fired!');
// // }
// // eventEmitter.on('event',myEvent);
// //
// // eventEmitter.emit('event');
//
//
// // var mysql = require('mysql');
// //
// // var connection = mysql.createConnection({
// //   host:'localhost',
// //   user:'root',
// //   password:'',
// //   database:'prm'
// // });
// //
// //
// // connection.connect(function(err){
// //   if(err) throw err;
// //     console.log("Connected.");
//   //
//   // connection.query("CREATE TABLE node_table (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255))",function(err,result){
//   //   if(err)throw err;
//   //   console.log("Table Got Created. ")
//   // });
//   //
//   // connection.query("INSERT INTO node_table (name) VALUES('manoj')",function(err,result){
//   //   if(err)throw err;
//   //   console.log("Affected Rows : " + result.affectedRows);
//   // });
//
//   // var sql = "INSERT INTO node_table (name) VALUES ?";
//   //
//   // var values = [
//   //   ['sandy'],
//   //   ['ajju'],
//   //   ['karthi'],
//   //   ['nag'],
//   //   ['kishi']
//   // ];
//   //
//   // connection.query(sql,[values],function(err,result){
//   //   if(err)throw err;
//   //   console.log('Affected Rows : ' + result.insertId );
//   // });
//
// //   connection.query("SELECT * FROM node_table",function(err,result,feilds){
// //     if(err)throw err;
// //     console.log(result[0].name);
// //   })
// //
// // });
//
//
// // var mongoClient = require('mongodb').MongoClient;
// //
// // var url = "mongodb://localhost:27017/mydb";
// //
// // mongoClient.connect(url,function(err,db){
// //   if(err)throw err;
//
// // db.createCollection("customers",function(err,result){
// //   if(err) throw err;
// //   console.log("Created Collection!");
// //   db.close();
// // });
//   // console.log("Database Created!");
// //   var myObj = [
// //     { name: 'John', address: 'Highway 71'},
// //     { name: 'Peter', address: 'Lowstreet 4'},
// //     { name: 'Amy', address: 'Apple st 652'},
// //     { name: 'Hannah', address: 'Mountain 21'},
// //     { name: 'Michael', address: 'Valley 345'},
// //     { name: 'Sandy', address: 'Ocean blvd 2'},
// //     { name: 'Betty', address: 'Green Grass 1'},
// //     { name: 'Richard', address: 'Sky st 331'},
// //     { name: 'Susan', address: 'One way 98'},
// //     { name: 'Vicky', address: 'Yellow Garden 2'},
// //     { name: 'Ben', address: 'Park Lane 38'},
// //     { name: 'William', address: 'Central st 954'},
// //     { name: 'Chuck', address: 'Main Road 989'},
// //     { name: 'Viola', address: 'Sideway 1633'}
// //   ];
// // db.collection("customers").insertMany(myObj,function(err,result){
// //   if(err) throw err;
// // console.log(result.insertedCount);
// // db.close();
// // });
// //
//
// // db.collection("customers").find({name:/^V/}).sort({name:-1}).toArray(function(err,data){
// //   if(err) throw err;
// //
// //   console.log(data);
// //   db.close();
// // });
//
// // db.collection("customers").deleteMany({name:/^V/},function(err,result){
// //   if(err) throw err;
// //
// //   console.log(  result.result.n + " documents got deleted!" );
// //   db.close();
// // });
//
//
// // db.collection("customers").drop(function(err,flag){
// //   if(err)throw err;
// //
// //   if(flag)console.log("Dropped Successfully!");else console.log("Not Dropped!");
// //   db.close();
// // })
//
// // db.dropCollection("customers",function(err,flag){
// //   if(flag)console.log("Success!");else console.log("Failure");
// //   db.close();
// // });
// //
// // });
//
// var http = require('http');
//
// var fs = require('fs');
//
// var url = require('url');
//
//
// http.createServer((req,res)=>{
//
//   var pathname = url.parse(req.url,true);
//
//   var filename = pathname.pathname.substr(1);
//   console.log(pathname.pathname.substr(1));
//
//   if(filename != ""){
//     fs.readFile(filename, (err,data)=>{
//       if(err) {
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.write("File Not Found.");
//         res.end();
//       }else{
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         res.end();
//       }
//
//     });
//   }else {
//       console.log("No File Name passed!");
//       res.writeHead(404,{'Content-Type':'text/html'});
//       res.write("File Name Not passed");
//       res.end();
//   }
//
//   //res.writeHead(200,{'Content-Type':'text/html'});
//   //res.write("Hello There!");
//   // res.end();
// }).listen(8080);

var matrix = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  [0, 'J', 0]
];


var rowSize =  matrix.length;
var columnSize = matrix[0].length;

// for(i=0;i<rowSize;i++){
//     for(j=0;j<columnSize;j++){
//       var element = [];
//         if(i!=0)
//           element.push(matrix[i-1][j]);
//
//         if(i!=rowSize-1)
//           element.push(matrix[i+1][j]);
//
//         if(j!=0)
//           element.push(matrix[i][j-1]);
//
//         if(j!=columnSize-1)
//           element.push(matrix[i][j+1]);
//           console.log(element);
//     }
// }
counter = 0;
for(i=0;i<rowSize;i++){
    for(j=0;j<columnSize;j++){
      if( matrix[i][j] != 0 ){
        counter++;
        var element = [];
          if(i!=0 && matrix[i-1][j] != 0)
            counter+=1;

          if( i != rowSize-1 && matrix[i+1][j] != 0 )
            counter+=1;

          if( j!=0 && matrix[i][j-1] != 0 )
            counter+=1;

          if(j!=columnSize-1 && matrix[i][j+1] != 0)
            counter+=1;
        }
    }
}

console.log(counter);
