import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("Hello The Time Vintage Watch, Good bye a girl district 7.");
})

app.listen(5000,() => {
    console.log("Hello Vintage Watch");
})