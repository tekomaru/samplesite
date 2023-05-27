import OwnService from "@/components/ServicePage/ServiceWeOffer/ServiceNextPage/OwnService/OwnService";
import OwnServiceMain from "@/components/ServicePage/ServiceWeOffer/ServiceNextPage/OwnService/OwnServiceMain";
import Contact from '../../components/common/Contact/Contact'
import Layout from '../../components/common/Layout'

export default function PageOwnService() {
    return(
        <Layout>
            <main>
                <OwnServiceMain />
                <OwnService />
                <Contact />
            </main>
        </Layout>
    )
}