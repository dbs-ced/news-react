import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import All from './pages/All';
import Sources from './pages/Sources';

function App() {
  return (
    <Router>
      <NavBar />

      <div className="container my-4">
        <Switch>
          <Route path="/all">
            <All />
          </Route>
          <Route path="/sources">
            <Sources />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
