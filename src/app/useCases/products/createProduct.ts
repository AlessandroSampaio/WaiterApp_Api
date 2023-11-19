import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  console.log(req.body);

  try{

    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients} = req.body;

    // const {name, description, price, category, ingredients} = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      imagePath,
      ingredients: JSON.parse(ingredients),
    });

    res.status(201).json(product);
  }catch (err) {
    console.error(err);

    res.sendStatus(500);
  }
}
