// const tervitus1 = (nimi) => {
//   return 'Tervitus ' + nimi;
// }

// const tervitus2 = nimi => 'Tere ' + nimi;

// console.log(tervitus1('Aadu'));
// console.log(tervitus2('Udu'));

// const linnad = ['Tenerife', 'Numana', 'Laagri'];
// linnad.forEach(element => {
//   // console.log(element);
// });

// linnad.forEach(element => {
//   console.log(element);
// })

const linnad = ['Tenerife', 'Numana', 'Laagri'];


// console.log(linnadKoos);

const linnadHTML = (linn) => {
  return  `
  <div>
      <h1>Tore linn: ${linn}</h1>
  </div>
  `
}

const linnadKoos = linnad.map(linnadHTML);

console.log(linnadKoos);
