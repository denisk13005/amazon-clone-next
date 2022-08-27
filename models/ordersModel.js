import { Schema, model, models } from "mongoose"

const productsSchema = new Schema({
  category: String,
  description: String,
  id: Number,
  image: String,
  price: Number,
  qte: Number,
  rating: Object,
  title: String,
})
const ordersSchema = new Schema({
  userId: String,
  orderDate: Date,
  order: [productsSchema],
  totalPrice: Number,
})

const Order = models.Order || model("Order", ordersSchema)
export default Order
