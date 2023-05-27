import Layout from '../../components/common/Layout';
import About from '../../components/AboutPage/About/About';
import Company from '../../components/AboutPage/Company/Company';
import CEOMessage from '../../components/AboutPage/CEOMessage/CEOMessage';
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb';


export default function about() {
  return (
    <Layout>
      <BreadCrumb />
      <div>
        <About />
        <Company />
        <CEOMessage />
      </div>
    </Layout>
  );
}
