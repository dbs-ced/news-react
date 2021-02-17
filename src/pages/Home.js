import { Fragment } from 'react';
import CountriesList from '../components/CountriesList';
import NewsList from '../components/NewsList';

export default function Home () {
  return (
    <Fragment>
      <div className="container my-4">
        <CountriesList />

        <NewsList source="top-headlines" />
      </div>
    </Fragment>
  );
}