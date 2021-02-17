import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Top from './pages/Top';
import All from './pages/All';
import Sources from './pages/Sources';
import Search from './pages/Search';
import MapPage from './pages/MapPage';
import Error from './pages/Error';

class App extends Component {
  constructor (props) {
    super (props);
  }

  render () {
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
          <Route path="/all">
            {!this.props.currentCountry ? <Redirect to="/" /> : <All />}
          </Route>
          <Route path="/sources">
            {!this.props.currentCountry ? <Redirect to="/" /> : <Sources />}
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/top">
            {!this.props.currentCountry ? <Redirect to="/" /> : <Top />}
          </Route>
          <Route exact path="/">
            <MapPage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCountry: state.currentCountry
  }
}

export default connect(mapStateToProps)(App);