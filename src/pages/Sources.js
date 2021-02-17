import { Fragment } from 'react';
import SourcesList from '../components/SourcesList';

export default function Sources () {
  return (
    <Fragment>
      <div className="container my-4">
        <SourcesList />
      </div>
    </Fragment>
  );
}