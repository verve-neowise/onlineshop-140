import Product from "../model/product.model";

export default function (body: any, fileName: string): Product {
  return {
    id: 0,
    name: body.name,
    price: body.price,
    description: body.description,
    image: fileName,
    brand: {
      id: body.brand_id,
      name: ''
    },
    category: {
      id: body.category_id,
      name: ''
    }
  }
}