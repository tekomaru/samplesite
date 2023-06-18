import Layout from "@/components/common/Layout";
import ContactText from "@/components/ContactPage/ContactText/ContactText";
import ContactForm from "@/components/ContactPage/ContactForm/ContactForm";
import { BreadCrumb } from "@/components/common/BreadCrumb/BreadCrumb";


export default function contact(){
    return(
        <Layout>
            <BreadCrumb />
        <ContactText />
        <ContactForm />
        </Layout>
    )
}