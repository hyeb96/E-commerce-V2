import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from './components/nav.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
