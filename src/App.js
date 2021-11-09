import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
