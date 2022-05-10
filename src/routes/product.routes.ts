import { Router } from 'express'
import { v4 as uuid } from 'uuid'
import multer from 'multer'

const router = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './upload'),
  filename: (req, file, cb) => cb(null,  uuid() + '.png') 
})

const upload = multer({ storage })

router.post('/', upload.single('poster'), (req, res) => {

  res.sendStatus(200)
})

export default router