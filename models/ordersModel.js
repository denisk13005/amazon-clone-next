import { Schema, model, models } from "mongoose"

const ordersSchema = new Schema({
  userId: String,
  orderDate: Date,
  order: [Object],
  totalPrice: Number,
})

const Order = models.Order || model("Order", ordersSchema)
export default Order
