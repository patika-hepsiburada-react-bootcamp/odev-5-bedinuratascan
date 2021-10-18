import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MainFooter from "./MainFooter";

const Container = () => {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Main />
        <MainFooter />
      </section>
      <Footer />
    </>
  );
};

export default Container;
