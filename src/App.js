import './App.scss';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Membership from './components/Membership';
import MovieSlider from './components/MovieSlider';
import WhyJoin from './components/WhyJoin';
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Banner/>
      <MovieSlider/>
      <WhyJoin/>
      <FAQ/>
      <Membership/>
      <Footer/>
    </div>
  );
};

export default App;