import React, {Component} from 'react'

//Colocar el export default aqui o al final es lo mismo
export default class TaskForm extends Component{

    state = {
        title: '',
        descripcion: ''
    }

    onSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
    }

    onChange = (eventico) => {
        console.log(eventico.target.name, eventico.target.value)
        this.setState({
            [eventico.target.name]: eventico.target.value
        })
    }



    render(){
        return (
        <form onSubmit={this.onSubmit}>
            <input 
            type="text" 
            name="title"
            placeholder="Escribe una tarea" 
            onChange={this.onChange} 
            value={this.state.title}
            />
            <br></br>
            <br></br>
            <textarea 
            name="descripcion"
            placeholder="Escribe una descripcion" 
            onChange={this.onChange} 
            value={this.state.descripcion}>
            </textarea>
            <input type="submit"/>
        </form>
       )
    }
}