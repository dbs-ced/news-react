import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import NewsList from '../components/NewsList';

class Search extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <Fragment>
      <div className="container my-4">
        Resultat de recherche { this.props.searchQuery }

        <NewsList source="search" query={ this.props.searchQuery } />
      </div>
    </Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery
  };
}

export default connect(mapStateToProps)(Search);