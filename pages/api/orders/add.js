import connectMongo from "../../../utils/connectMongo"
import Order from "../../../models/ordersModel"

export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO")
    await connectMongo()
    console.log("CONNECTED TO MONGO")

    console.log("CREATING DOCUMENT")
    const order = await Order.create(req.body)
    console.log("CREATED DOCUMENT")

    res.json({ order })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
