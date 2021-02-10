import { Fragment } from 'react';
import CountriesList from '../components/CountriesList';
import NewsList from '../components/NewsList';

export default function Home () {
  return (
    <Fragment>
      <CountriesList />

      <NewsList source="top-headlines" />
    </Fragment>
  );
}