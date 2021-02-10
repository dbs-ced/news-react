import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container my-4">
        <CountriesList />

        <NewsList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
