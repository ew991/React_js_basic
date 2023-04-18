import React from "react";
class AddCompoment extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handelOnChange_Jtitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handelOnChange_Salary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('thieu')
            return;
        }
        console.log('check data input: ', this.state)
        this.props.addNewjob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })





    }
    render() {
        return (
            <><div>
                <form>
                    <label for="fname" >Jobs title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handelOnChange_Jtitle(event)}
                    />
                    <br />
                    <label for="lname" >Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handelOnChange_Salary(event)}
                    />
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </div >
            </>
        )
    }
}
export default AddCompoment;
