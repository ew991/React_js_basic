import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class InforUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }


    }
    handleBacklisUser = () => {
        this.props.history.push(`/Listuser`)
    }
    render() {
        let { user } = this.state
        let isEmtyObj = Object.keys(user).length === 0;
        console.log('check props infor user', this.props)
        return (<>
            <div>this is infor User with id: {this.props.match.params.id}</div>
            {isEmtyObj === false && <>
                <div>User Name:   {user.first_name}-{user.last_name}</div>
                <div>User Email:  {user.email}</div>
                <div>
                    <img src={user.avatar} />
                </div>
                <div>
                    <button type='button' onClick={() => { this.handleBacklisUser() }}>Back</button>
                </div>

            </>}
        </>
        )
    }
}



export default withRouter(InforUser);