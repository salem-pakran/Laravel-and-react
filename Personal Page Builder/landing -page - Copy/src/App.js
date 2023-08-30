import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import axios from "axios";

axios.defaults.baseURL= "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type']="application/json";
axios.defaults.headers.post['Accept']="application/json";

axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
