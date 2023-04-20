import Hero from "./component/Hero/Hero";
import Advantages from "./component/Advantages/Advantages";
import Choise from "./component/Choice/Choice";
import CallBack from "./component/CallBack/CallBack";
import About from "./component/About/About";
import Clients from "./component/Сlients/Сlients";
import Step from "./component/Step/Step";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

import "./App.css";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Choise />
      <CallBack />
      <Clients />
      <Step />
      <About />
      <Footer />
    </>
  );
};

export default App;
