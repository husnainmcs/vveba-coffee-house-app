import Navbar from '@/components/navbar';
import Landing from '@/components/landing';
import About from '@/components/about';
import Menu from '@/components/menu';
import Data from '@/components/data';
import Customers from '@/components/customers';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
 return (
    <div className="container">
      <Navbar />
      <Landing />
      <About />
      <Menu />
      <Data />
      <Customers />
      <Contact />
      <Footer />
    </div>
 );
}
