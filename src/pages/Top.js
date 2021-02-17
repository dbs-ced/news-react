import { Fragment } from 'react';
import CountriesList from '../components/CountriesList';
import NewsList from '../components/NewsList';

export default function Top () {
  return (
    <Fragment>
      <div className="container my-4">
        <NewsList source="top-headlines" />
      </div>
    </Fragment>
  );
}