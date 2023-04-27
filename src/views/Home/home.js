import React from "react";
import Hinh from "../../assets/images/images.jpeg"
class Home extends React.Component {
    render() {
        return (
            <>
                <div>Hello world from Home </div>
                <div>
                    <img src={Hinh} />
                </div>
            </>


        )
    }
}
export default Home;