import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
