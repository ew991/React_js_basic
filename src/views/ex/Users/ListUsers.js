import React from "react";
import axios from "axios";
import './LisUsers.scss'
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
    state = {
        listuser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        // console.log("1111111111", res.data.data)
        this.setState({
            listuser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    // handleViewinfor = (user) => {
    //     this.props.push(`/Listuser/${id}`)

    // }
    handleViewIf = (user) => {
        this.props.history.push(`/Listuser/${user.id}`)

    }
    render() {
        let { listuser } = this.state;
        return (
            <div className="lisuser-container" >
                <div className="title" >
                    This is user information
                </div>
                <div className="lisuser-content">
                    {listuser && listuser.length > 0 &&
                        listuser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => { this.handleViewIf(item) }}
                                >
                                    {index + 1}--{item.first_name} {item.last_name}

                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);