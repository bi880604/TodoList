import http from 'http';
import { todoListFromDB } from './firebase.js'
const header = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
}
let server = http.createServer(function(req, res){
    if(req.url == '/'){
        
    }
    if(req.url == '/Will'){
        
    }
    console.log(req.url)
    res.writeHead(200,header);
    res.write('123');
    res.end();
});


server.listen(8000, '10.2.201.197',()=>{
    console.log('port 8000 is running')
})


