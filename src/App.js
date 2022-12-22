import './App.css';

function App(props) {
  return(
    <>
      <h2>Kalvium Gallery</h2>
      <div className='images'>
        {props.data.map(element => {
          console.log(element);
          return(<img src={element['img']} id={element.id} />)
        })}
      </div>
    </>
  )
}

export default App;
