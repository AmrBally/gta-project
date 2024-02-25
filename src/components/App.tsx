import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header";
import HomePhone from "./pages/Home system/Home phone/HomePhone";
import HomeBar from "./components/ui/HomeBar/HomeBar";
import NewCalculator from "./pages/calculator/newCalculator";
import AppStore from "./pages/AppStore/AppStore";
import Keyboard from "./pages/CallApp/Keyboard/Keyboard";
import Gallery from "./pages/Gallery/Gallery";
import Folder from "./pages/Home system/Folder/Folder";
import Battery from "./pages/Home system/Battery/Battery";
import { AnimatePresence } from "framer-motion";
import { debugData } from "../utils/debugData.js";
import LoginPage from "./pages/Instagram/LoginPage";
import AutoLoginInsta from "./pages/Instagram/AutoLoginInsta";
import InstaHome from "./pages/Instagram/InstaHome";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  const [makeCall, setMakeCall] = useState(false);
  return (
    <div className=" relative rounded-[50px] overflow-hidden p-3 border-[3px] border-gray-500 bg-black h-screen w-screen">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePhone />
              </>
            }
          />
          <Route
            path="/calculator"
            element={
              <>
                <Header />
                <NewCalculator />
                <HomeBar bottom="20px" />
              </>
            }
          />
          <Route
            path="/appstore"
            element={
              <>
                <Header />
                <AppStore />
                <HomeBar bottom="20px" />
              </>
            }
          />
          <Route
            path="/phonecall"
            element={
              <>
                <Header dark={!makeCall} />
                <Keyboard makeCall={makeCall} setMakeCall={setMakeCall} />
                <HomeBar bottom="30px" dark={true} />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Header />
                <Gallery />
                <HomeBar bottom="20px" />
              </>
            }
          />
          <Route
            path="/loginIntsa"
            element={
              <>
                <Header />
                <LoginPage />
                <HomeBar bottom="20px" />
              </>
            }
          />
          <Route
            path="/AutoLoginInsta"
            element={
              <>
                <Header />
                <AutoLoginInsta />
                <HomeBar bottom="20px" />
              </>
            }
          />
          <Route
            path="/InstaHome"
            element={
              <>
                <Header />
                <InstaHome />
                <HomeBar bottom="20px" />
              </>
            }
          />
          <Route
            path="/folder"
            element={
              <>
                <Folder />
              </>
            }
          />
          <Route
            path="/battery"
            element={
              <>
                <Battery />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
