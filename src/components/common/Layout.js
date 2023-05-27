import Navber from '../common/Navber/Navber'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
  return (
  <>
      <Navber />
      <main>{children}</main>
      <Footer />
    </>
  );
}