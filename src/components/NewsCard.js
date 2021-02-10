import { Component } from 'react';
import moment from 'moment';

class NewsCard extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <div className="card">
      { this.props.news.urlToImage ? <img className="card-img-top" src={this.props.news.urlToImage} alt="Card image cap"/> : '' }
      <div className="card-body">
        <h5 className="card-title">{this.props.news.title}</h5>
        <p className="card-text">{this.props.news.description}</p>
        <a href={this.props.news.url} target="_blank" className="btn btn-primary">Lire l'article</a>
        <p className="card-text"><small className="text-muted">{moment(this.props.news.publishedAt).format('LLLL')}</small></p>
      </div>
    </div>
  }
}

export default NewsCard;