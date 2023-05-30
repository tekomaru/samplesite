import Contact from '@/components/common/Contact/Contact'
import AppDevelopment from '@/components/ServicePage/ServiceWeOffer/ServiceNextPage/ApplicationDevelopment/AppDevelopment'
import OrderDelivery from '@/components/ServicePage/ServiceWeOffer/ServiceNextPage/OrderDelivery/OrderDelivery'
import WebSystemDevelopment from '@/components/ServicePage/ServiceWeOffer/ServiceNextPage/WebSystemDevelopment/WebSystemDevelopment'
import Layout from '../../components/common/Layout'
import SystemDevelopmentMain from '../../components/ServicePage/ServiceWeOffer/ServiceNextPage/SystemDevelopmentMain/SystemDevelopmentMain'

export default function ServiceSystemDevelopment() {
    return(
        <Layout>
            <main>
                <SystemDevelopmentMain />
                <AppDevelopment />
                <WebSystemDevelopment />
                <OrderDelivery />
                <Contact />
            </main>
        </Layout>
    )
}