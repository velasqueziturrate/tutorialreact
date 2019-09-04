import React, {Component} from 'react';

class Task extends Component{

    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        return  <div /* class='red' */ style={this.StyleCompleted()}>
            {this.props.task.title} - 
            {this.props.task.descripcion} - 
            {this.props.task.done} - 
            {this.props.task.id}
            <input type="checkbox"/>
            <button style={btnDelete}>
                x
            </button>
              </div>
    }
}

const btnDelete = {
    fontSize: '18px',
    background: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px 15px',
    cursor: 'pointer'
}

export default Task;