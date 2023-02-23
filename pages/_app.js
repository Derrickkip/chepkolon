import 'bootstrap/dist/css/bootstrap.css'
import '../styles/design_tokens.css'
import '../styles/utilities.css'
// import '../styles/welcome.css'
import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
