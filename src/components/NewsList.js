import { Component, Fragment } from 'react';
import axios from 'axios';

import NewsCard from './NewsCard';
import Spinner from './Spinner';

class NewsList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  render () {
    const newsList = this.state.articles.map((article, index) => {
      return <NewsCard news={article} key={index} />
    });
    
    return <Fragment>
      { newsList.length <= 0 ?
        <Spinner /> :
        <div className="card-columns">
          {newsList}
        </div>}
    </Fragment>;
  }

  componentDidMount () {
    let url;
    switch (this.props.source) {
      case 'everything' :
        url = `http://newsapi.org/v2/everything`;
        break;
      default: case 'top-headlines' :
      url = `http://newsapi.org/v2/top-headlines?country=fr`;
        break;
    }

    axios.get(url)
      .then(response => {
        this.setState({
          ...this,
          articles: response.data.articles
        });
      }).catch(error => {
        console.error(error)
      });
  }
}

export default NewsList;