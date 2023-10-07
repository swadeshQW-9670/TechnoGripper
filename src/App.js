import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import MdContent from './components/MdContent';
import StatsComponent from './components/Middle';
import Footer from './components/Footer';

function App() {
  return (
  <>
   <Navbar />
   <Home />
  <MdContent />
   <StatsComponent />
   <Footer />
    </>
  );
}

export default App;
