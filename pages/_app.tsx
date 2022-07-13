import '../styles/globals.scss'
import Layout from './compoent/Layouts'
import { AppPropsWithLayout } from './compoent/models/layout'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
  <LayoutWrapper>
    <Component {...pageProps} />
    
  </LayoutWrapper>
  )
}

export default MyApp
