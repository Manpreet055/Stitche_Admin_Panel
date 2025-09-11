import "./index.css";
import { Outlet } from "react-router-dom";
import SearchContextProvider from "./Context/searches/SearchContextProvider";
import SearchValueContextProvider from "./Context/SearchValueContextProvider";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import SideBarContextProvider from "./Context/sidebar/SideBarContextProvider";
import Navbar from "./Components/Layout/Navbar/Navbar";
function App() {
  return (
    <div className="flex w-full ">
      <SideBarContextProvider>
        <Sidebar />
        <div className="flex flex-col w-full">
          <header>
            <Navbar />
          </header>
          <SearchContextProvider>
            <SearchValueContextProvider>
              <main className={`scrollbar-hidden w-full overflow-hidden`}>
                <Outlet></Outlet>
              </main>
            </SearchValueContextProvider>
          </SearchContextProvider>
        </div>
      </SideBarContextProvider>
    </div>
  );
}

export default App;
