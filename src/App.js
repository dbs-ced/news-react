import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import All from './pages/All';
import Sources from './pages/Sources';
import Search from './pages/Search';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      <NavBar />

      <Switch>
        <Route path="/map">
          <MapPage />
        </Route>
        <Route path="/all">
          <All />
        </Route>
        <Route path="/sources">
          <Sources />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
