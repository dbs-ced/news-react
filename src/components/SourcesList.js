import { Component, Fragment } from 'react';
import axios from 'axios';

import Spinner from './Spinner';
import SourceCard from './SourceCard';

class SourcesList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      sources: []
    };
  }

  render () {
    const sourcesList = this.state.sources.map((source, index) => {
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
    axios.get('http://newsapi.org/v2/sources')
      .then(response => {
        this.setState({
          ...this,
          sources: response.data.sources
        });
      }).catch(error => {
        console.error(error)
      });
  }
}

export default SourcesList;