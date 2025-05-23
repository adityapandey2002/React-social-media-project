import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("CreatePost");

  return (
    <>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
