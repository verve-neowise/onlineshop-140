import Product from "../model/product.model"
import client from "./client"

async function addProduct(product: Product) {
  let sql = `
  INSERT INTO product (name, image, description, brand_id, category_id, price) 
  VALUES ($1, $2, $3, $4, $5, $6)`

  await client.query(sql, [
    product.name,
    product.image,
    product.description,
    product.brand.id,
    product.category.id,
    product.price
  ])
}

async function remove(id: number) {
  let sql = 'DELETE FROM product WHERE id = $1'
  await client.query(sql, [id])
}

async function findAll() {
  let sql = `SELECT product.*, brand.name as brand_name, category.name as category_name
            FROM product 
            INNER JOIN brand ON brand_id = brand.id
            INNER JOIN category ON category_id = category.id;`

  let res = await client.query(sql)

  let products: Product[] = res.rows.map(row => {
    return {
      id: row.id,
      name: row.name,
      image: row.image,
      description: row.description,
      price: row.price,
      brand: {
        id: row.brand_id,
        name: row.brand_name
      },
      category: {
        id: row.category_id,
        name: row.category_name
      }
    }
  })

  console.table(products);
}

async function findByCategory(id: number) {
  let sql = `SELECT product.*, brand.name as brand_name, category.name as category_name
  FROM product 
  INNER JOIN brand ON brand_id = brand.id
  INNER JOIN category ON category_id = category.id WHERE category_id = $1;`

  let res = await client.query(sql, [id])

  let products: Product[] = res.rows.map(row => {
    return {
      id: row.id,
      name: row.name,
      image: row.image,
      description: row.description,
      price: row.price,
      brand: {
        id: row.brand_id,
        name: row.brand_name
      },
      category: {
        id: row.category_id,
        name: row.category_name
      }
    }
  })

  console.table(products);
}

export default {
  findAll,
  findByCategory,
  addProduct
}