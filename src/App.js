import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Main from './components/Main';
import Nav from './components/Nav';
import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <>
    <AlertProvider>
    <div className='grid-container'>
    <Nav />
    <Hero />
     <Main />
    <Footer />
    </div>
    </AlertProvider>
    </>
  );
}

export default App;
