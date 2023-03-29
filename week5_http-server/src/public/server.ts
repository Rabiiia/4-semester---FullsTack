import * as dotenv from 'dotenv';

import * as http from 'http';
import fs from 'fs';
import url from 'url'; //to pass params
import logger from '../utility/logger'

dotenv.config({path:'./config.env'});
console.log(process.env.PORT);
// console.log(process.env.HOSTNAME);
// console.log(__dirname); 
// console.log(__filename);



// Part 1
const data = fs.readFileSync(`${__dirname}\\data.json`, 'utf-8'); 


const server = http.createServer((req, res) => {

    const {query, pathname, path, href, search} = url.parse(req.url!, true);
    // Set responds header
    res.writeHead(200, {"content-Type": "text/html"});
    // const pathname = req.url;

    console.log(pathname)
    fs.readFile(`${__dirname}/public/homepage.html`,'utf-8', (err, data) => {
        res.end(data);
    });

    if(pathname === '/') {
        res.writeHead(200, {"content-type": "text/html"});
        fs.readFile(`${__dirname}/public/homepage.html`,'utf-8', (err, data) => {
            res.end(data);
        });
    }else if (pathname === "/about") {
        res.writeHead(200, {"content-type": "text/html"});
        logger.warn("WARNING ABOUT THE PAGE!")
        res.end("<h1>About</h1>")


    } else if(pathname === "/data") {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(data);
        
    } else if(pathname === "/date") {
        console.log(query);
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(`Date: ${query.year}, ${query.month}, ${query.day}`);
    } else {
        res.writeHead(400, {"content-type": "text/html"});
        res.end(`Path ${pathname} does not exist.`)
    }
    // res.end("Hello World!");
})

server.listen({
    host: process.env.HOSTNAME,
    port: process.env.PORT
}, () =>  {
    console.log(`Server is listening to http://localhost:${process.env.PORT}`)
    // logger.info(`Server is listening to http://localhost:${process.env.PORT}`)

})

