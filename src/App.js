import React, { Component } from "react";
import debounce from "lodash.debounce";
import Input from "../src/components/Input"
import SearchResults from "../src/components/SearchResults"
import SetUnits from "./components/SetUnits";
import WeatherReport from "./components/WeatherReport";


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      error: "",
      loading: false,
      searchKeyWord: "",
      data: [],
      cityData: {},

    };
  }

  debounce_fun = debounce(function () {
    this.searchCity(this.state.searchKeyWord);
  }, 500);
  
  handleSetInput = (text) => {
    this.setState({ searchKeyWord: text });
  };

searchCity = (city) => {
    fetch(`https://api.weatherserver.com/weather/cities/${city}`)
      .then((response) => response.json())
      .then((actualData) => {
        this.setState({ data: actualData.results });
      })
      .catch((err) => {
        this.setState({ error: err.message });
        console.log(err.message);
      });
  };

  getWeather = (city) => {
    this.setState({ loading: true, error: "" });
    fetch(`https://api.weatherserver.com/weather/cities/${city}`)
      .then((response) => response.json())
      .then((actualData) => {
        
        this.setState({ loading: false, data: actualData.results });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err.message });
        console.log(err.message);
      });
  };

  getCityDataById = (cityId, unit = "C") => {
    fetch(`https://api.weatherserver.com/weather/current/${cityId}/${unit}`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
      })
      .catch((err) => {
        this.setState({ loading: false, error: err.message });
        console.log(err.message);
      });
  };

  componentDidMount() {
      this.getWeather("New Jersey")
    
  }

 componentDidUpdate() {
    this.debounce_fun();
    this.getCityDataById(this.state.data[0]?.id, "C");
  }

  render() {
    return (
      <div className="weather-app">
        <h1 className="h1">WeatherWatch</h1>
          {this.state.loading && <div className="is-loading" />}
        {this.state.error && <div className="error-panel" />} 
        {console.log(this.state.searchKeyWord)}
          <Input handleSetInput={this.handleSetInput} />
          <SearchResults results={this.state.data} />
          <SetUnits />
          <WeatherReport />
        
      </div>
      
    );
  }
}

export default App;
