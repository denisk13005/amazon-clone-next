const { connectToDatabase } = require("../../lib/connectMongo")

export default async function hendler(req, res) {
  let { db } = await connectToDatabase()
  console.log(db)
  switch (req.method) {
    case "GET": {
      async function getOrders(req, res) {
        try {
          // connect to the database
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
    case "POST": {
      async function addOrder(req, res) {
        try {
          // connect to the database
          // add the post
          await db.collection("orders").insertOne(req.body)
          // return a message
          return res.json({
            message: "Post added successfully",
            success: true,
          })
        } catch (error) {
          // return an error
          return res.json({
            message: new Error(error).message,
            success: false,
          })
        }
      }
      return addOrder(req, res)
    }
    case "PUT": {
      async function modifyOrder(req, res) {
        try {
          const datas = await db
            .collection("orders")
            .find({ userId: null })
            .toArray()
          const orderModify = datas[0].order
          await db
            .collection("orders")
            .update(
              { userId: null },
              { $set: { order: [...orderModify, req.body] } }
            )
          return res.json({ message: "modify", success: true })
        } catch (error) {
          return res.json({
            message: new Error(error).message,
            success: false,
          })
        }
      }
      return modifyOrder(req, res)
    }
  }
}
