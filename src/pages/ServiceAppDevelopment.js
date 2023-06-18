import AppDevelopmentMain from '../components/ServicePage/ServiceWeOffer/ServiceNextPage/AppDevelopmentMain/AppDevelopmentMain'
import SmartphoneApp from "@/components/ServicePage/ServiceWeOffer/ServiceNextPage/SmartphoneApp/SmartphoneApp"
import Layout from '../components/common/Layout'
import Contact from '../components/common/Contact/Contact'
import OrderDelivery from '@/components/ServicePage/ServiceWeOffer/ServiceNextPage/OrderDelivery/OrderDelivery'

export default function ServiceAppDevelopment() {
    return(
        <Layout>
            <main>
                <AppDevelopmentMain />
                <SmartphoneApp />
                <OrderDelivery />
                <Contact />
            </main>
        </Layout>
    )
}