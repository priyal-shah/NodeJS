const express = require('express');

const app= new express();



let movies=[
    {
        name : "Dhoom",
        rating : 5,
        actor : "Shradha kapoor"
    },
    {
        name : "Tiger",
        rating : 7,
        actor :"Salman Khan"
    }
]

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/movies",(req, res)=>(
    res.send(movies)
));

app.post("/movies",(req,res)=>{
    let newMovie={
        name : "The Taj",
        rating : 5,
        actor : "abc"

    }

    movies.push(newMovie);
    res.send(movies);
});

app.listen(3000,()=>{console.log("listinging at 3000")});