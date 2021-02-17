import { Fragment } from "react";
import CountriesList from '../components/CountriesList';
import NewsList from '../components/NewsList';

export default function All () {
  return (
    <Fragment>
      <div className="container my-4">
        <NewsList source="everything" />
      </div>
    </Fragment>
  );
}