import express from 'express';

import { place } from '../controllers/auth.js';

const router = express.Router()

router.post('/place', place)

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" })
})

//will match any other pathj
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "page not found" })
})
export default router;