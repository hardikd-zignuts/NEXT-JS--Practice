import AppBar from '@/components/AppBar';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
    </>
  )
}
