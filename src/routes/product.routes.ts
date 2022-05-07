import { UploadedFile } from 'express-fileupload'
import { Router } from 'express'
import { v4 as uuid } from 'uuid'
import productService from '../service/product.service'
import productMapper from '../mappers/product.mapper'

const path = __dirname + '/../../upload/'

const router = Router()

router.post('/', (req, res) => {

  if (req.files === undefined) {
    return res.status(400).json('Files required.')
  }

  let img: UploadedFile | UploadedFile[] = req.files.image

  if (Array.isArray(img)) {
    return res.status(400).json('One file required')
  }

  let file: UploadedFile = img
  let fileName = uuid() + '.png'

  file.mv(path + fileName)

  productService.addProduct(productMapper(req.body, fileName))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).json({ error: err }))
})

export default router