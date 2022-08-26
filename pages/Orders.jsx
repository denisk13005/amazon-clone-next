import React from "react"
import { useState } from "react"

const Orders = () => {
  const [orders, setOrders] = useState()

  useState(() => {
    const loadOrders = () => {
      if (window !== undefined) {
        const datas = window.localStorage.getItem("order")
        datas && setOrders(JSON.parse(datas))
      }
    }
    loadOrders()
  }, [])
  return (
    <div>
      {orders &&
        orders.products.map((el) => (
          <div key={el.title}>
            <h1 style={{ color: "black" }}>{el.title}</h1>
            <img src={el.image} alt="" style={{ width: "50px" }} />
          </div>
        ))}
    </div>
  )
}

export default Orders
