import './App.css';
import Navbar from './component/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './screens/home/Home';
import Contact from './screens/contact/Contact';
import Search from './screens/search/Search';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
