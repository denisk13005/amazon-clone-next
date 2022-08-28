import React from "react"
import Image from "next/image"
// import { useState, useEffect } from "react"
// import connectMongo from "../utils/connectMongo"
// import Order from "../models/ordersModel"

const Orders = ({ data }) => {
  console.log(data)
  const datas = data.message

  return (
    <div>
      {datas &&
        datas.map((orders) => (
          <div key={orders._id} style={{ color: "black" }}>
            {orders.order.map((el) => (
              <Image
                src={el.image}
                width={50}
                height={50}
                key={el.title}
                alt={"image"}
              />
            ))}
          </div>
        ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  let dev = process.env.NODE_ENV !== "production"
  let server = dev
    ? "http://localhost:3000"
    : "https://nextjs-blog-app-with-mongodb-five.vercel.app/"
  // request posts from api
  let response = await fetch(`${server}/api/orders/add`)
  // extract the data
  let data = await response.json()
  console.log(data)

  return {
    props: {
      data,
    },
  }
}

export default Orders
