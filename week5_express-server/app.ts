import express = require("express");
import morgan = require("morgan");
import fs from "fs"

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
    console.log("Development mode");
}

app.use(express.json()); //body parser for json data
app.use(express.static(`${__dirname}/public`))

// Middleware
// runned before every request
// remember to restart før denne forneden kører
 app.use((req, res, next) => {
    console.log("hello from middleware");
    next();
 })

 //andet eksempel
//  app.use((req, res, next) => {
//    req["requestTime"] = new Date().toISOString();
//    next();
//  })

// part 1 with hello world
app.get("/", (req, res) => {
    // const data = req.re
    res.status(200)
     .json({
        status:"success",
        message:"Hello world"
     })
})

// part 2 hello world with params
app.get("/hello/:name", (req, res) => {
    res.status(200)
     .json({
        status:"success",
        message:`Hello ${req.params.name}`
     })
})

//part 3 Hello world with query
app.get("/hello", (req, res) => {
    res.status(200)
     .json({
        status:"success",
        // message:`Hello ${req.query.name}`
        message: `Hello ${req.query.name} || "World`
     })
})

// Part 4 error
app.get("/error", (req, res) => {
    try  {
        // throw new Error("Went wrong")
        res.status(200)
        .json({
            status:"success",
            message:"Hello world"
     })

    } catch (err: any) {
        res.status(200)
        .json({
            status:"fail",
            message: err.message
     })
    
    }
    
})

// part 5 JSON DATA

app.get("/data", (req, res) => {
    const data = fs.readFileSync(`${__dirname}\\data.json`, 'utf-8');
    
    res.status(200)
     .header({
        "content-type": "application/json",
        "content-length": data.length, 
     })
     .json({
        status:"success",
        data: data
        // data: JSON.parse(data) //pretty get data in browser   
    })
})

//Part 6 Post JSON data

app.post("/", (req, res) => {
    const jsonData = req.body
    res.status(201)
        .json({ 
            status:"success",
            data: jsonData   
        })
})

app.listen(3000, () => {
    console.log(`Server is listening to http://localhost:3000`);
})