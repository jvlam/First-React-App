import React from "react";


class DisplayInfo extends React.Component {
    render() {
        console.log(this.props);

        //destructuring
        const {name, age} = this.props;

        //listUsers
        const {listUsers} = this.props;

        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <p>My name's {user.name}</p>  
                            <p>My age's {user.age}</p> 
                            <hr/>
                        </div>
                    )
                })}
                {/* <p>My name is {this.props.name}</p>  
                <p>My age is {this.props.age}</p>  
                <p>Using props {name}</p>  
                <hr/>
                <p>My name is {this.props.name}</p>  
                <p>My age is {this.props.age}</p> 
                <hr/>
                <p>My name is {this.props.name}</p>  
                <p>My age is {this.props.age}</p>  */}
            </div>

        )
    }
}

export default DisplayInfo