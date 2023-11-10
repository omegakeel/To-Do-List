import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let todayList = [];
let workList = [];

let d = new Date().toDateString();

app.get("/", (req, res) => {
    res.render("today.ejs", { listForToday: todayList, currentDate: d });
});

app.post("/", (req, res) => {
    todayList.push(req.body["nTask"]);
    res.render("today.ejs", { listForToday: todayList, currentDate: d });
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { listForWork: workList, currentDate: d });
});

app.post("/work", (req, res) => {
    workList.push(req.body["nTask"]);
    res.render("work.ejs", { listForWork: workList, currentDate: d });
});




app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});