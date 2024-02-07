import React from "react";

class Componentwillunmount extends React.Component {

    componentWillUnmount()
    {
        alert("component will unmount")
    }
    constructor() {
        super();
    }
    render() {
            return <div>
                    <h1>Componentwillunmount</h1>
                    </div>
    }
}
export default Componentwillunmount