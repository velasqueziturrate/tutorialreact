import React from 'react';
import './App.css';

//Funcion
/* function Helloworld(props) {
  // console.log(props);
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
} */

//Clase Equivalente
class Helloworld extends React.Component {
  //Es una propiedad
  state = {
    //Dato del Componente, llamado show
    show: true
  }

  //Colocarlo como funcion flecha soluciona el problema del alcance y ahorra el bind(this)
  toggleShow = () => {
    /* Cambia el estado de un booleano */
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{props.subtitle}</h3>
          {props.mytext}
          <button onClick={this.toggleShow.bind(this)}>Toggle Show</button>
        </div>
      );
    } else {
      return <h1>No hay elementos
      <button onClick={this.toggleShow}>Toggle Show</button>
      </h1>
    }
  }
}

//Formas Equivalentes de Hacer el Componente App 

//Constante Flecha
/* 
  const App = () =>     
    <div>This is my component: 
    <Helloworld mytext="Hola Dani" subtitle="El Mejor"/> 
    <Helloworld mytext="Hello Dani" subtitle="The Best"/> 
    <Helloworld mytext="Ciao Dani" subtitle="Il Migliore"/>
    </div> 
*/

//Clase
/* 
  class App extends React.Component {

  render() {
    return (
      <div>This is my component:
        <Helloworld mytext="Hola Dani" subtitle="El Mejor" />
        <Helloworld mytext="Hello Dani" subtitle="The Best" />
        <Helloworld mytext="Ciao Dani" subtitle="Il Migliore" />
      </div>
    );
  }
} 
*/

//Funcion
function App() {
  return (
    <div>This is my component:
    <Helloworld mytext="Hola Dani" subtitle="El Mejor" />
      <Helloworld mytext="Hello Dani" subtitle="The Best" />
      <Helloworld mytext="Ciao Dani" subtitle="Il Migliore" />
    </div>
  );
}

export default App;
