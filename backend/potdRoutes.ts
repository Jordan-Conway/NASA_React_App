import type { Request as Req, Response as Res } from "express"
import { Router } from "express"
import dotenv from 'dotenv';

dotenv.config()

const router = Router()

router.get('/:date', (req: Req, res:Res) => {
    let url = `https://api.nasa.gov/planetary/apod?date=${req.params.date}&api_key=${process.env.NASA_API_KEY}`
    const request = new Request(url)

    fetch(request)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        let data = {
            url: json.url,
            title: json.title,
            copyright: json.copyright
        }
        res.send(data)
    })
})

export default router