import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Ul from './components/Ul';
import Footer from './components/Footer';
function App(){
  return(
    <div className = 'App'>
      <div className = 'Nav'>
        <Nav />
      </div>
    <div className = 'Header'>
        <Header />
    </div>
    <div className = 'Ul'>
      <Ul />
    </div>
    <div className = 'Footer'>
      <Footer />
    </div>
    </div>
  )
}


export default App;
