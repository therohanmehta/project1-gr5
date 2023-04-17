
import './App.css';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Header from "./Pages/Header/Header";
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from "./Pages/Footer/Footer";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='./' element={<AboutUs/>}/>
      <Route path='./footer' element={<Footer/>}/>

     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
