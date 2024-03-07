function LinnadeLoetelu({linnad}) {
  const linnaNimed = linnad.map((linn) => {
    return (
      <li>{linn.name}</li>
    );
  })

  return (
    <div>
      <h1>Linnade loetelu</h1>
      <ul>{linnaNimed}</ul>
    </div>
    
  );
}

export default LinnadeLoetelu;
