import "./App.css";
import Header from '../src/components/Header'
import Main from "./components/Main";
import MainFooter from "./components/MainFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header/>
        <Main/>
        <MainFooter/>
      </section>
      <Footer/>
    </>
  );
}

export default App;
