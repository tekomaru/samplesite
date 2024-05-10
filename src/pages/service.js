import ServiceTop from '../components/ServicePage/Service/ServiceTop'
import ServiceWeOffer from '../components/ServicePage/ServiceWeOffer/ServiceWeOffer'
import Contact from '../components/common/Contact/Contact'
import Layout from '../components/common/Layout'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'
import ServiceSlider from '../components/ServicePage/ServiceWeOffer/ServiceSlider/ServiceSlider'

export default function SERVICE() {
    return (
        <Layout>
        <BreadCrumb />
        <main>
        <ServiceTop />
        {/* <ServiceSlider /> */}
        <ServiceWeOffer />
        <Contact />
        </main>
        </Layout>
    )
}