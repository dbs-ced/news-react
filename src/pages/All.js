import { Fragment } from "react";
import CountriesList from '../components/CountriesList';
import NewsList from '../components/NewsList';

export default function All () {
  return (
    <Fragment>
      <CountriesList />

      <NewsList source="everything" />
    </Fragment>
  );
}