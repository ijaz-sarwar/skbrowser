import './App.css';
import Navbar from './component/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './screens/home/Home';
import Contact from './screens/contact/Contact';
import Search from './screens/search/Search';
import Header from './component/header/Header';
import About from './screens/about/About';
import Detail from './component/detail/Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
