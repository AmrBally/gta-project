import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header.jsx";
import HomePhone from "./pages/Home system/Home phone/HomePhone";
import HomeBar from "./components/ui/HomeBar/HomeBar.jsx";
import NewCalculator from "./pages/calculator/newCalculator.jsx";
import AppStore from "./pages/AppStore/AppStore.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Keyboard from "./pages/CallApp/Keyboard/Keyboard.jsx";
import { useState } from "react";
import Battery from "./pages/Home system/Battery/Battery.jsx";

function App ()
{
  const [ makeCall, setMakeCall ] = useState( false );

  return (
    <div className=" relative rounded-[50px] overflow-hidden p-3 border-[3px] border-gray-500 bg-black h-screen w-screen">
      <Routes>
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
              <Keyboard setMakeCall={setMakeCall} makeCall={makeCall} />
              <HomeBar dark={true} bottom="20px" />
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

              <HomeBar />
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
    </div>
  );
}

export default App;
