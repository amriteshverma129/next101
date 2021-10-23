import '../styles/globals.css'
import Layout from './component/layout'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout> <Component {...pageProps} /></Layout>
  )  
}

export default MyApp