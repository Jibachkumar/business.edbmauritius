import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/headers/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="font-sans">
        <div>
          <Header />
        </div>
        <div className="pt-16 md:pt-32">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
