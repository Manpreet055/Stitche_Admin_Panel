import "./index.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Navbar from "./Components/Layout/Navbar/Navbar";
import ContextProvider from "./Context/ContextProvider";
function App() {
  return (
      <ContextProvider>
        <Sidebar />
        <div className="flex flex-col w-full">
          <header>
            <Navbar />
          </header>
          <main className={`scrollbar-hidden w-full overflow-hidden`}>
            <Outlet></Outlet>
          </main>
        </div>
      </ContextProvider>
  );
}

export default App;
