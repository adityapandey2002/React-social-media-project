import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import PostList from "./components/PostList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          <PostList></PostList>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
