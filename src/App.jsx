import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header.jsx";
import HomePhone from "./pages/Home system/Home phone/HomePhone";
import HomeBar from "./components/ui/HomeBar/HomeBar.jsx";
import NewCalculator from "./pages/calculator/newCalculator.jsx";
import AppStore from "./pages/AppStore/AppStore.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Notifications from "./pages/Home system/Notifications/Notifications.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import ControlCenter from "./pages/Home system/Control Center/ControlCenter.jsx";

function App() {
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
              <HomeBar />
            </>
          }
        />
        <Route
          path="/appstore"
          element={
            <>
              <Header />
              <AppStore />
              <HomeBar />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Header />
              <Contacts />
              <HomeBar />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Header />
              <Gallery />
              <HomeBar />
            </>
          }
        />
        <Route
          path="/notifications"
          element={
            <>
              <Notifications />
              <HomeBar />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
