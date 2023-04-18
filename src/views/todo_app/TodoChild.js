import React from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
class ChildTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'making videos' },
            { id: 'todo3', title: 'watching youtube' },

        ],
        editT: {}

    }
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }
    handleOnclickX = (todo) => {
        let listTodoo = this.state.listTodo;
        listTodoo = listTodoo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: listTodoo
        })
        toast.success('Delete success!')
    }
    handleEditTodo = (todo) => {
        let { listTodo, editT } = this.state;
        let isEmptyObj = Object.keys(editT).length === 0;
        if (isEmptyObj === false && editT.id === todo.id) {
            let listTodocopy = [...listTodo];
            let objIndex = listTodocopy.findIndex((item => item.id === todo.id));

            listTodocopy[objIndex].title = editT.title
            this.setState({
                listTodo: listTodocopy,
                editT: {}
            })
            toast.success('Edit Todo success!')
            return;
        }
        this.setState({
            editT: todo
        })
    }
    handleOnchangeTodo = (event) => {
        let editTodocopy = { ...this.state.editT };
        editTodocopy.title = event.target.value;
        this.setState({
            editT: editTodocopy
        })
    }
    render() {
        let { listTodo, editT } = this.state;
        let isEmptyObj = Object.keys(editT).length === 0;
        console.log('check obj', isEmptyObj)
        return (

            <div className="list-todo-content">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                {listTodo && listTodo.length > 0 &&
                    listTodo.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id} onSubmit={() => this.handleEditTodo(item)} >
                                {isEmptyObj === true ?
                                    <span>{index + 1}-{item.title} </span>
                                    :
                                    <>
                                        {editT.id === item.id ?
                                            <span >
                                                {index + 1}-
                                                <input
                                                    value={editT.title}
                                                    onChange={(event) => this.handleOnchangeTodo(event)}

                                                /></span>
                                            :
                                            <span>
                                                {index + 1}-{item.title}
                                            </span>
                                        }
                                    </>
                                }

                                <button className="edit" type="submit"
                                    onClick={() => this.handleEditTodo(item)}
                                >
                                    {isEmptyObj === false && editT.id === item.id ?
                                        'Save' : 'Edit'}
                                </button>
                                <button className="delete"
                                    onClick={() => this.handleOnclickX(item)}
                                >Delete</button>
                            </div>
                        )
                    })}
            </div>
        )
    }
}
export default ChildTodo;