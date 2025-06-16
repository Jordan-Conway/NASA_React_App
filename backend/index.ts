const express = require("express")
require("dotenv").config()

const app = express()

app.listen(8080, () => {
    console.log("Server listening in port 8080")
    console.log(process.env.NASA_API_KEY)
})