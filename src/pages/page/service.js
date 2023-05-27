import ServiceTop from '../../components/ServicePage/Service/ServiceTop'
import ServiceWeOffer from '../../components/ServicePage/ServiceWeOffer/ServiceWeOffer'
import TechnologyStacks from '../../components/ServicePage/TechnologyStacks/TechnologyStacks'
import Contact from '../../components/common/Contact/Contact'
import Layout from '../../components/common/Layout'
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb'

export default function service() {
    return (
        <Layout>
        <BreadCrumb />
        <main>
        <ServiceTop />
        <ServiceWeOffer />
        <TechnologyStacks />
        <Contact />
        </main>
        </Layout>
    )
}