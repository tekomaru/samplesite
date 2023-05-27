import { BreadCrumb } from "@/components/common/BreadCrumb/BreadCrumb";
import Environment from "@/components/RecruitPage/Environment/Environment";
import LetsEntry from "@/components/RecruitPage/LetsEntry/LetsEntry";
import { OpenPosition } from "@/components/RecruitPage/OpenPosition/OpenPosition";
import RecruitMain from "@/components/RecruitPage/RecruitMain/RecruitMain";
import Layout from '../../components/common/Layout'
import SelectionFlow from "../../components/RecruitPage/SelectionFlow/SelectionFlow";

export default function recruit(){
    return(
        <Layout>
            <BreadCrumb />
        <RecruitMain />
        <OpenPosition />
        <Environment />
        <SelectionFlow />
        <LetsEntry />
        </Layout>
    )
}