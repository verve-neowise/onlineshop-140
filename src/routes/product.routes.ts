import { Router } from 'express'
import productMapper from '../mappers/product.mapper'
import productService from '../service/product.service'
import { v4 as uuid } from 'uuid'
import multer from 'multer'

const router = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './upload'),
  filename: (req, file, cb) => cb(null,  uuid() + '.png') 
})

const upload = multer({ storage })

router.post('/', upload.single('poster'), (req, res) => {

  if (!req.file) {
    return res.sendStatus(400) // Bad Request
  }
  
  let product = productMapper(req.body, req.file.filename)

  console.log(req.body);

  productService.addProduct(product)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.sendStatus(500)
      console.error(err);
    })
})

export default router