import { Dropdown } from 'react-bootstrap';

import CountriesConfig from '../configs/newsapi';

export default function CountriesList () {
  const countriesList = CountriesConfig.map((country, index) => {
    return <Dropdown.Item key={index} href="#/action-1">{ country.iso }</Dropdown.Item>
  });

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Pays
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {countriesList}
      </Dropdown.Menu>
    </Dropdown>
  )
}