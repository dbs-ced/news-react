import { Fragment } from 'react';

import Map from '../components/Map';

export default function MapPage () {
  return (
    <Fragment>
      <div className="my-4">
        <Map />

        <div className="container mt-4">
          <p>Choisissez sur la carte le pays pour lequel vous souhaitez voir les actualités.</p>
        </div>
      </div>
    </Fragment>
  );
}

