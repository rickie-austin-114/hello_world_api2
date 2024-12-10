const express = require("express")
const cors = require("cors")

app = express()
app.use(cors())

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({"message": "hello world"})
})

app.listen(PORT)