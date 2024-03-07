import Linn from './Linn';
import './linnad.css';
import tenerife from './img/tenerife.jpeg';
import numana from './img/numana.webp';
import LinnadeLoetelu from './LinnadeLoetelu';

// const numanaLinn = {
//   name: 'Numana',
//   riik: 'Itaalia',
//   pilt: 'numana'
// }

const linnad = [
  {name: 'Numana', riik: 'Itaalia', pilt: numana},
  {name: 'Tenerife', riik: 'Hispaania', pilt: tenerife},
]

// function App() {
//   return (
//     <div className="container">
//       <h1>Linnad</h1>
//       <Linn name={numanaLinn.name} riik={numanaLinn.riik} pilt={numanaLinn.pilt} />
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">

      <div>
        <LinnadeLoetelu linnad={linnad} />
      </div>
      <div>
        <h1>Linnad, kuhu minna</h1>
        {linnad.map((linn)=>{
          return (
            <Linn name={linn.name} riik={linn.riik} pilt={linn.pilt} />
          )
        })}
      </div>
    </div>
  )
}

export default App;
