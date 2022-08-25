import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    orders: [],
    basketItems: 0,
    loading: false,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productPresent = state.products.find(
        (el) => el.id === action.payload.id
      )
      if (productPresent) {
        // if the product is already in the basket, we just add the quantity
        state.products.forEach((product) => {
          if (product.id === action.payload.id) {
            product.qte = product.qte + action.payload.qte
          }
        })
      }
      // if the product is not in the basket, we add it
      else {
        let product = action.payload
        // product.qte = 1
        state.products = [...state.products, product]
      }
      //on incrémente le nb d'items dans le panier
      state.basketItems++
      //on met à jour le total
      const price = `${action.payload.price}.${action.payload.smallPrice}`

      state.totalPrice =
        state.totalPrice + parseFloat(price) * `${action.payload.qte}`
    },
  },
})
export const { addProduct } = productsSlice.actions
export default productsSlice.reducer
