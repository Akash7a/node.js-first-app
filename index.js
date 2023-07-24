import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send(`<h1>It's working</h1>`);
})

app.listen(PORT, () => {
    console.log(`Your app has been live on port:${PORT}`);
})