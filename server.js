const express = require("express")
const parser = require("body-parser")
const path = require("path")

const app = express()

app.use(parser.json())
app.use(express.static(path.join(__dirname, "/client/dist")))

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
})

app.listen(8000)