import express from "express"
import dotenv from "dotenv"
import router from "./potdRoutes.js"
import type { Request, Response } from "express"

dotenv.config()

const app = express()

app.use('/potd', router)

app.get('/', (_req: Request, res: Response) => {
  res.send('Home Page');
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})