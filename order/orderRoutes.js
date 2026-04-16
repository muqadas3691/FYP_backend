 import express from 'express';
import {
  createOrderHandler,
  deleteOrderHandler,
  changeOrderStatusHandler,
  getAllOrdersHandler,
  historyHandler, 
  getRewardsHandler,
  processEasypaisaHandler,
  processBankTransferHandler,
} from './orderController.js';

const router = express.Router();

router.post('/create', createOrderHandler); 
router.delete('/:orderId/:storeId', deleteOrderHandler); 
router.patch('/status/:orderId', changeOrderStatusHandler); 
router.get('/all', getAllOrdersHandler);
router.get('/history', historyHandler);
router.get('/rewards/:id', getRewardsHandler);

// Payment routes
router.post('/payment/easypaisa', processEasypaisaHandler);
router.post('/payment/bank-transfer', processBankTransferHandler);

export default router;