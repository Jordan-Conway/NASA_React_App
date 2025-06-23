import type { Request, Response } from "express"
import { Router } from "express"

const router = Router()

router.get('/:date', (req: Request, res:Response) => {
    res.send(`Requested picture for date ${req.params.date}`)
})

export default router