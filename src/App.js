import FiveDayWeather from './components/FiveDayWeather';
import SearchLocation from './components/SearchLocation';
import LocationContextProvider from "./contexts/LocationProvider";
import "./App.css"

function App() {
  return (
    <div className="App">
      <LocationContextProvider>
        <SearchLocation />
        <FiveDayWeather />
      </LocationContextProvider>
    </div>
  );
}

export default App;
