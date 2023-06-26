import Layout from '../components/common/Layout';
import About from '../components/AboutPage/About/About';
import Company from '../components/AboutPage/Company/Company';
import CEOMessage from '../components/AboutPage/CEOMessage/CEOMessage';
import { BreadCrumb } from '@/components/common/BreadCrumb/BreadCrumb';
import Contact from '@/components/common/Contact/Contact';


export default function ABOUT() {
  return (
    <Layout>
      <BreadCrumb />
      <div>
        <About />
        <Company />
        <Contact />
      </div>
    </Layout>
  );
}
