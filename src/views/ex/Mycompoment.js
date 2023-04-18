import React from "react";
import ChildCompoment from "./childCompoment";
import AddCompoment from "./AddCompoment";
class Mycompoment extends React.Component {
    state = {
        arrJobs: [
            { id: 'aJob1', title: 'Developers', salary: '500' },
            { id: 'aJob2', title: 'Tester', salary: '400' },
            { id: 'aJob3', title: 'Managers', salary: '1000' }
        ]

    }
    addNewjob = (job) => {
        console.log('check input from parent:', this.state)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleJob = (job) => {
        let curranJob = this.state.arrJobs;
        curranJob = curranJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: curranJob
        })
    }
    render() {

        return (
            <>
                <AddCompoment
                    addNewjob={this.addNewjob}
                />
                <ChildCompoment
                    arrJobs={this.state.arrJobs}
                    deleJob={this.deleJob}
                />

            </>

        )
    }
}
export default Mycompoment;