import Nav from "./Components/Nav";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/MenuComponents/Menu";
import About from "./Components/AboutComponents/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DecorationBanner from "./Components/HomePage/DecorationBanner";
import Intro from "./Components/HomePage/Intro";
import Contact from "Components/Contact/Contact";
import Catering from "Components/Catering/Catering";
import Visit from "./Components/VisitComponents/Visit";
import HomePage from "Components/HomePage/HomePage";
import { ModalProvider } from "Components/context/Modal";
function App() {
  //ToDo: Ctrl Shift F
  //General Task List:
  //Make Components files readable and organized
  //Organize Pictures
  //Vist us Component
  //Clean rendering for images
  //Make smaller Menu so that it has white borders
  //Relocate all the files that you don't use or need

  return (
    <div className="h-screen flex flex-col justify-between">
      <BrowserRouter>
        <div>
          <Header />
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage />
                // <>
                //   <DecorationBanner />
                //   <Intro />
                // </>
              }
            ></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/catering" element={<Catering />}></Route>
            <Route path="visitus" element={<Visit Us />}></Route>
            <Route
              path="/contact"
              element={
                <ModalProvider>
                  <Contact />
                </ModalProvider>
              }
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      {/* <DynamicMenu></DynamicMenu> */}
    </div>
  );
}

export default App;
