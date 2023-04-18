import React from "react";
class ChildCompoment extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickX = (job) => {
        // console.log('phan tu click:', job)
        this.props.deleJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => { this.handleShowHide() }} >Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    if (item.salary >= 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.title}:{item.salary} $
                                                <span onClick={() => { this.handleOnclickX(item) }}>x</span>
                                            </div>)
                                    }
                                }
                                )
                            }</div >
                        <div><button onClick={() => { this.handleShowHide() }}>Hide</button></div>
                    </>


                }
            </>

        )
    }
}
export default ChildCompoment;