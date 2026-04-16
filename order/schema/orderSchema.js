 import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['Pending', 'Complete', 'Processing', 'Failed'], 
      default: 'Pending' 
    },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        storeId: { type: String, required: true },
      },
    ], 
    rewardsUsage: { type: Boolean, required: false, default: false },
    totalPrice: { type: Number, required: true },
    // Payment fields
    paymentMethod: {
      type: String,
      enum: ['cod', 'easypaisa', 'jazzcash', 'bank'],
      required: true,
      default: 'cod'
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed', 'Refunded'],
      default: 'Pending'
    },
    transactionId: { type: String, required: false },
    orderDate: { type: Date, default: Date.now }
  },
  { timestamps: true }, 
);

export const Order = mongoose.model('Order', orderSchema);