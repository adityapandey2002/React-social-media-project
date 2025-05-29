import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  // const [selectedTab, setSelectedTab] = useState("Create-Post");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar

          ></Sidebar>
          <div className="content">
            <Header />
            <Outlet />

            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
