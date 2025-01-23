import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Membership from './components/Membership';
import MovieSlider from './components/MovieSlider';
import WhyJoin from './components/WhyJoin';
import Login from './components/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className='app'>
            <Header/>
            <Banner/>
            <MovieSlider/>
            <WhyJoin/>
            <FAQ/>
            <Membership/>
            <Footer/>
          </div>
        }/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;