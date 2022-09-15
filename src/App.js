import Navigation from './components/Navigation';
import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Question from './pages/Question';
import Payment from './pages/Payment';
import Galery from './pages/Galery';
import Catalog from './pages/Catalog';
import Review from './pages/Review';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/question' element={<Question/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/galery' element={<Galery/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/review' element={<Review/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
