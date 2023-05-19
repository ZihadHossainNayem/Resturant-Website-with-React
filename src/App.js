import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/menu" Component={Menu} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
