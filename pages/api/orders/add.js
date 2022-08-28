// import connectMongo from "../../../utils/connectMongo"
// import Order from "../../../models/ordersModel"

// export default async function addTest(req, res) {
//   try {
//     console.log("CONNECTING TO MONGO")
//     await connectMongo()
//     console.log("CONNECTED TO MONGO")

//     console.log("CREATING DOCUMENT")
//     const order = await Order.create(req.body)
//     console.log("CREATED DOCUMENT")

//     res.json({ order })
//   } catch (error) {
//     console.log(error)
//     res.json({ error })
//   }
// }

const { connectToDatabase } = require("../../../lib/connectMongo")

export default async function hendler(req, res) {
  switch (req.method) {
    case "GET": {
      async function getOrders(req, res) {
        try {
          // connect to the database
          let { db } = await connectToDatabase()
          // fetch the posts
          let orders = await db
            .collection("orders")
            .find({})
            .sort({ published: -1 })
            .toArray()
          // return the posts
          return res.json({
            message: JSON.parse(JSON.stringify(orders)),
            success: true,
          })
        } catch (error) {
          // return the error
          return res.json({
            message: new Error(error).message,
            success: false,
          })
        }
      }
      return getOrders(req, res)
    }
  }
}
