import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import NewsCard from './NewsCard';
import Spinner from './Spinner';

import fetchNews from '../requests/fetchNews';

class NewsList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const newsList = this.props.newsList.map((article, index) => {
      return <NewsCard news={article} key={index} />
    });
    
    return <Fragment>
      { newsList.length <= 0 ?
        <Fragment>
          <Spinner />
        </Fragment> :
        <div className="card-columns">
          {newsList}
        </div>}
    </Fragment>;
  }

  componentDidMount () {
    this.props.fetchNews(this.props.currentCountry, this.props.source, this.props.query);
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.newsList,
    currentCountry: state.currentCountry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: (currentCountry, source, query) => { dispatch(fetchNews(currentCountry, source, query)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);