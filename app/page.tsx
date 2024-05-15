import Main from "./components/Main";
import Hero from "./components/Hero";
import Navigation from "./components/Nav";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* <Quotes /> */}
      <Main />
      <Footer />
    </>
  );
}
