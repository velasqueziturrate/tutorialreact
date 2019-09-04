import React, {Component} from 'react';
import './App.css';
import task from './sample/task.json';
//Componentes
import TaskForm from './component/TaskForm.js';
import Tasks from './component/Tasks.js';

//Es equivalente: extends React.Component que: importar React, {Component} y: extends Component
class App extends Component {

  state = {
    task: task
  }

//Función Map
  render(){
    return <div>
      <TaskForm/>
      <Tasks task= {this.state.task}/>
    </div>
  }
}

//Equivalente a Clase
/* function App () {
  return ;
} */

export default App;

