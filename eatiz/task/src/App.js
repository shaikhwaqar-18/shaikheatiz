import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Midcontent from "./components/Midcontent";
import Midcontent2 from "./components/Midcontent2";

function App() {
  return (
    <>
      <Header />
      <Midcontent />
      <Midcontent2 />
      <Footer />
    </>
  );
}

export default App;
