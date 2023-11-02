import './index.css';
import Number from './components/Number';

function App() {

  let components = [];

  for (let index = 0; index < 100; index++) {

    components.push(<Number number ={index}/>)
    
  }

  return (
    <div className="App">
     <div className="container">
      {
        components.map(component => {
          return <>{component}</>
        })
      }
     </div>
     
    </div>
  );
}

export default App;
