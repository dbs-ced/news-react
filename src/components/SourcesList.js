import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Spinner from './Spinner';
import SourceCard from './SourceCard';

import fetchSources from '../requests/fetchSources';

class SourcesList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const sourcesList = this.props.sources.map((source, index) => {
      return <SourceCard key={index} source={source} />
    });
    
    return <Fragment>
    { sourcesList.length <= 0 ?
      <Spinner /> :
      <div className="card-columns">
        { sourcesList }
      </div>
    }
    </Fragment>;
  }

  componentDidMount () {
    this.props.fetchSources(this.props.currentCountry);
  }
}

const mapStateToProps = (state) => {
  return {
    currentCountry: state.currentCountry,
    sources: state.sources
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSources: (currentCountry) => { dispatch(fetchSources(currentCountry)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourcesList);