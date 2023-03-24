import AppBar from '@/components/AppBar';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppBar />
      <div className='container mt-5'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
