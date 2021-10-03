import Head from 'next/head'
import Navbar from '../Components/Home/Navbar/Navbar'
import OrderSteps from '../Components/Home/OrderSteps/OrderSteps'
import ProductInfo from '../Components/Home/ProductInfo/ProductInfo'
import Steps from '../Components/Home/ProductInfo/Steps/Steps'
import SearchArea from '../Components/Home/SearchArea/SearchArea'
import CartSummary from '../Components/Home/ProductInfo/CartSummary/CartSummary'
import Checkout from './Checkout'


const Home = () => {
  return (
    <div>
      <Head>
        <title>Cross Border Shopping</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CartSummary />
        
        {/* <Navbar />
        <SearchArea />
        <OrderSteps />
        <Steps />
        <ProductInfo /> */}
      </main>
    </div>
  )
}

export default Home