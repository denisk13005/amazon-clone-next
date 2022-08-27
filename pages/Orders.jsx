import React from "react"
import { useState, useEffect } from "react"
import connectMongo from "../utils/connectMongo"
import Order from "../models/ordersModel"

const Orders = ({ orders }) => {
  console.log(orders)
  // const [orders, setOrders] = useState()

  // useEffect(() => {
  //   const loadOrders = () => {
  //     const datas = window.localStorage.getItem("order")
  //     datas && setOrders(JSON.parse(datas))
  //   }
  //   loadOrders()
  // }, [])
  return (
    <div>
      {orders &&
        orders.map((order) => (
          <div key={order._id} style={{ border: "1px solid red" }}>
            <h1 style={{ color: "black" }}>{order.orderDate}</h1>
            {order.order.map((el) => (
              <>
                <h1 key={el.title}>{el.title}</h1>
                <img src={el.image} alt="" style={{ width: "50px" }} />
              </>
            ))}
          </div>
        ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    console.log("CONNECTING TO MONGO")
    await connectMongo()
    console.log("CONNECTED TO MONGO")

    console.log("FETCHING DOCUMENTS")
    const orders = await Order.find()
    console.log("FETCHED DOCUMENTS")

    return {
      props: {
        orders: JSON.parse(JSON.stringify(orders)),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

export default Orders
