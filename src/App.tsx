import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {

    return (
        <div className="relative">
            <Navbar />
            <Social />
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
