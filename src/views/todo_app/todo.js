import React from "react";
import './todo.scss';

import ChildTodo from "./TodoChild";
class Todolists extends React.Component {
    render() {
        // let { listTodo } = this.state;
        return (
            <><p>
                SIMPLE TO DO APP with react.js(Toan)
            </p>
                <div className="list-todo-container">
                    <ChildTodo />
                </div>
            </>

        )
    }
}
export default Todolists;