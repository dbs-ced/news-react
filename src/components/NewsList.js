import { Component, Fragment } from 'react';
import axios from 'axios';
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
    this.props.fetchNews();

    // let url;
    // switch (this.props.source) {
    //   case 'search':
    //     url = `http://newsapi.org/v2/everything?q=${this.props.query}`;
    //     break;
    //   case 'everything' :
    //     url = `http://newsapi.org/v2/everything?q=sport&pageSize=100`;
    //     break;
    //   default: case 'top-headlines' :
    //   url = `http://newsapi.org/v2/top-headlines?country=fr`;
    //     break;
    // }

    // axios.get(url)
    //   .then(response => {
    //     this.setState({
    //       ...this,
    //       articles: response.data.articles
    //     });
    //   }).catch(error => {
    //     console.error(error)
    //   });
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.newsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => { dispatch(fetchNews()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);