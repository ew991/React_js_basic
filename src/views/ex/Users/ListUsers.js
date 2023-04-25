import React from "react";
import axios from "axios";
import './LisUsers.scss'
class ListUser extends React.Component {
    state = {
        listuser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listuser: res && res.data && res.data.data ? res.data.data : []
        })
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
                                <div className="child" key={item.id}>
                                    {index + 1}--{item.first_name} {item.last_name} || {item.email}

                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListUser;