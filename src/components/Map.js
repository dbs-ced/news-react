import { Component } from 'react';
import { MapContainer, TileLayer, LayerGroup, GeoJSON } from 'react-leaflet';
import { connect } from 'react-redux';
import { SELECT_COUNTRY } from '../redux/actions';

import WorldData from 'world-map-geojson';

import newsapiConfig from '../configs/newsapi';

class Map extends Component {
  constructor (props) {
    super(props);

    this.state = {
      geoJson: []
    };
  }

  render () {
    const position = [48.866667, 2.333333];

    return (
      <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ width: '100%', height: '800px' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayerGroup>
          {/* <GeoJSON data={WorldData} onEachFeature={this.onEachFeature} style={{ fillOpacity: 0 }}></GeoJSON> */}
          <GeoJSON data={this.state.geoJson} onEachFeature={this.onEachFeature.bind(null, this)} style={{ stroke: true, weight: 2, color: 'black', fillColor: '#b71540' }}></GeoJSON>
        </LayerGroup>
      </MapContainer>);
  }

  componentDidMount () {
    this.createFeatures();
  }

  onEachFeature (component, feature, layer) {
    layer.on('click', (event) => {
      // console.log(layer.feature.properties.name, layer.feature.properties.iso_code)
      component.props.selectCountry(layer.feature.properties.iso_code);
    });
  }

  createFeatures () {
    let featuresList = [];

    newsapiConfig.forEach(country => {
      WorldData.features.forEach(feature => {
        if (feature.properties.name.toLowerCase().indexOf(country.name.toLowerCase()) >= 0) {
          feature.properties.iso_code = country.iso;
          featuresList.push(feature);
        }
      });
    });

    this.setState({
      ...this,
      geoJson: {
        ...WorldData,
        features: featuresList
      }
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCountry: (currentCountry) => { dispatch({ type: SELECT_COUNTRY, currentCountry }) }
  }
}

export default connect(null, mapDispatchToProps)(Map);