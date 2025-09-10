import "./index.css";
import { Outlet } from "react-router-dom";
import SearchContextProvider from "./Context/searches/SearchContextProvider";
import SearchValueContextProvider from "./Context/SearchValueContextProvider";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import SideBarContextProvider from "./Context/sidebar/SideBarContextProvider";
function App() {
  return (
      <div className="flex w-full ">
        <SideBarContextProvider>
          <Sidebar />
        </SideBarContextProvider>
        <SearchContextProvider>
          <SearchValueContextProvider>
            <main className={`scrollbar-hidden w-full overflow-hidden`}>
              <Outlet></Outlet>
            </main>
          </SearchValueContextProvider>
        </SearchContextProvider>
      </div>
  );
}

export default App;
