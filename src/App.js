import Linn from './Linn';
import './linnad.css';
import tenerife from './img/tenerife.jpeg';
import numana from './img/numana.webp';

function App() {
  return (
    <div className="container">
      <h1>Linnad</h1>
      <Linn name="Numana" riik="Itaalia" pilt={numana} />
      <Linn name="Tenerife" riik="Hispaania" pilt={tenerife} />
    </div>
  );
}

export default App;
