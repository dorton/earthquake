import React, { Component } from 'react';
import './styles/App.css';
import EarthquakeInfo from './components/EarthquakeInfo';
import EarthquakeList from './components/EarthquakeList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            EarthQuakes!
          </div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
