 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Home from './components/js/home'
 import About from './components/js/about'
 import Chat from './components/js/chat'
function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={< Chat/>} />
       </Routes>
    </>
  );
}

export default App;
