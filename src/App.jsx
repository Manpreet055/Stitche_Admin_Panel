import "./index.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Navbar from "./Components/Layout/Navbar/Navbar";
import ContextProviderContainer from "./Context/ContextProviderContainer";
function App() {
  return (
    <div className="flex w-full ">
      <ContextProviderContainer>
        <Sidebar />
        <div className="flex flex-col w-full">
          <header>
            <Navbar />
          </header>
          <main className={`scrollbar-hidden w-full overflow-hidden`}>
            <Outlet></Outlet>
          </main>
        </div>
      </ContextProviderContainer>
    </div>
  );
}

export default App;
