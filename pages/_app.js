import Layout from "../components/Layout"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"

function MyApp({ Component, pageProps, session }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
