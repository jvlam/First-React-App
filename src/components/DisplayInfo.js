import React from "react";


class DisplayInfo extends React.Component {
    render() {
        console.log(this.props);

        //destructuring
        const {name, age} = this.props;

        return (
            <div>Display Information
                <p>My name is {this.props.name}</p>  
                <p>My age is {this.props.age}</p>  
                <p>Using props {name}</p>  
            </div>

        )
    }
}

export default DisplayInfo