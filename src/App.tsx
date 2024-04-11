import './assets/css/style.css';
import Wallet from './components/Wallet'
import Navbar from './components/Navbar'
import FooterLinks from './components/FooterLinks'
import BackToTop from './components/BackToTop'


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Wallet/>
     <FooterLinks/>
     <BackToTop/>
    </div>
  );
}

export default App;
