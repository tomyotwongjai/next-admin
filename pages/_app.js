import '../styles/globals.css'
import Header from '../components/Header/Header'
import Students from './students/students'
import Classes from './classes/classes'

function MyApp({ Component, pageProps }) {

  return <>
      <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
