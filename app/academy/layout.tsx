import Footer from '@/components/academy/Footer';
import Navbar from '@/components/academy/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar> */}
      <main>{children}</main>
      {/* <Footer /> */}
      {/* </Navbar> */}
    </>
  );
};

export default RootLayout;
