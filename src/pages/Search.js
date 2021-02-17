import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import NewsList from '../components/NewsList';

export default function Search () {
  let query = useQuery();

  return (
    <Fragment>
      <div className="container my-4">
        Resultat de recherche { query.get('query') }

        <NewsList source="search" query={ query.get('query') } />
      </div>
    </Fragment>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}