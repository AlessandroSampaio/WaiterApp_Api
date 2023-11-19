import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

//List Categories
router.get('/categories', listCategories);

//Create category
router.post('/categories', createCategory);

//List Products
router.get('/products', (req, res) => {
  res.send('OK');
});

//Create product
router.post('/products', (req, res) => {
  res.send('OK');
});

//Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

//List orders
router.post('/orders', (req, res) => {
  res.send('OK');
});

//Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

//Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

//Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
