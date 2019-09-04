import React, {Component} from 'react';
import Task from './Task.js';
import './Task.css';
import PropTypes from 'prop-types';

//Clase llamada Tasks que hereda las características de un componente de react

class Tasks extends Component{
    render(){
        return this.props.task.map(task => <Task task={task} key={task.id}/>);
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;