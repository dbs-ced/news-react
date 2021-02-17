import { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeSearchQuery } from '../redux/actions';

class NavBar extends Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <Link to="/" className="navbar-brand">Map News React</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Carte</Link>
          </li>
          <li>
            <span className="badge badge-info">{this.props.currentCountry}</span>
          </li>
          {!this.props.currentCountry ? '' :
            <Fragment>
              <li className="nav-item">
                <Link to="/top" className="nav-link">Top</Link>
              </li>
              <li className="nav-item">
                <Link to="/all" className="nav-link">All news</Link>
              </li>
              <li className="nav-item">
                <Link to="/sources" className="nav-link">Sources</Link>
              </li>
            </Fragment>
          }
        </ul>
        
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Recherche" value={this.props.searchQuery} onChange={this.props.changeSearchQuery}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
        </form>
        
      </div>
    </nav>
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.history.push('/search');
  }
}

const mapStateToProps = (state) => {
  return {
    currentCountry: state.currentCountry,
    searchQuery: state.searchQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchQuery: (event) => { dispatch(changeSearchQuery(event.target.value)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));