import NavBar from './components/NavBar';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container my-4">
        <NewsList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
