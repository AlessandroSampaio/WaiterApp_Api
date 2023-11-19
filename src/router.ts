import { Router } from 'express';

export const router = Router();

//List Categories
router.get('/categories', (req, res) => {
  res.send('OK');
});

//Create category
router.post('/categories', (req, res) => {
  res.send('OK');
});

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