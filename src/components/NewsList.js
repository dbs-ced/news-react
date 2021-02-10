import { Component } from 'react';
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
    
    return <div>
      { newsList.length <= 0 ?
        <Spinner /> :
        <div className="card-columns">
          {newsList}
        </div>}
    </div>;
  }

  componentDidMount () {
    axios.get('http://newsapi.org/v2/top-headlines?country=fr&apiKey=e1b15dcb1ae24da1b49661156a5e7d0e')
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