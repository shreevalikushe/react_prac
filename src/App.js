import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <div>
        <Card title="Mobile Operating System" li1 = "Android" li2 = "Blackberry" li3 = "iPhone" li4 ="Windows Phone" />

      </div>
      <div>
        <Card title="Mobile Manufactures" li1 = "Samsung" li2 = "HTC" li3 = "Micromax" li4 = "Apple" />
      </div>

    </div>
  );
}

export default App;
