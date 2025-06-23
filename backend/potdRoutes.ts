import type { Request, Response } from "express"
import { Router } from "express"

const router = Router()

router.get('/:date', (req: Request, res:Response) => {
    console.log(`Answering with: Requested picture for date ${req.params.date}`)
    res.json({msg: `Requested picture for date ${req.params.date}`})
})

export default router