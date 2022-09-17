import './assets/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
      </div>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
