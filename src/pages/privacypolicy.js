import { BreadCrumb } from "@/components/common/BreadCrumb/BreadCrumb";
import Layout from "@/components/common/Layout";
import PrivacyPolicy from "../components/PrivacyPolicyPage/PrivacyPolicyPage";

export default function privacypolicy() {
    return (
        <Layout>
            <BreadCrumb />
            <PrivacyPolicy />
        </Layout>
    )
}