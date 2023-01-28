import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DisplayProperties from './components/DisplayProperties';
import ViewingFloraProperty from './components/ViewingFloraProperty';
import FloraContactForm from './components/FloraContactForm';
import ViewingCrestaProperty from './components/ViewingCrestaProperty';
import LaCrestaContactForm from './components/LaCrestaContactForm';
import ViewingPeraProperty from "./components/ViewingPeraProperty"
import LaPeraContactForm from './components/LaPeraContactForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DisplayProperties/>}/>
          <Route path='/viewingFlora' element={<ViewingFloraProperty/>}/>
          <Route path='/floraContactForm' element={<FloraContactForm/>}/>
          <Route path='/viewingCresta' element={<ViewingCrestaProperty/>}/>
          <Route path='/crestaContactForm' element={<LaCrestaContactForm/>}/>
          <Route path='/viewingPera' element={<ViewingPeraProperty/>}/>
          <Route path='/peraContactForm' element={<LaPeraContactForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
