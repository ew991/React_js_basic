import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = (event) => {
        event.preventDefault()
        if (!this.state.title) {
            toast.error('Missing title')
            return;
        }
        console.log('check data input: ', this.state)
        this.props.addNewTodo({
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,

        })
        this.setState({
            title: ''
        })
        toast.success('woa so easy')

    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)} />
                <button className="add" type="button"
                    onClick={(event) => this.handleAddTodo(event)}>Add</button>
            </div>
        )
    }
}
export default AddTodo;