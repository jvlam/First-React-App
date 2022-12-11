import React from "react";
import Mycomponent from "./Mycomponent";


class AddUserInfo extends React.Component {

    // JSX cho phép viết code javaScript trong code của html
    // điểm hạn chế JSX chỉ return về được một element duy nhất 
    // muốn code js để tạo ra nội dung reder động thì code trong dấu {.. your code..}

    state = {
        name:  'lam',
        address: 'ha noi',
        age: 29
    };

    handleClick = (event) => {
        
        // merge state => react class

        this.setState({
            name: 'Vu',
            age: Math.floor((Math.random() * 100) + 1)
        })

    }

    handleOnMouseOver = (event) => {
        console.log(event);
    }

    handleOnchangeInput = (event) => {

        //bad code
        // this.state.name = event.target.value;

        //good
        this.setState({
            name: event.target.value
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnsubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.floor(Math.random() * 10) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    
    render() {
        return (
            <div>
                <p>my name is {this.state.name}</p>
                <p>my address is {this.state.address}</p>
                <p>my age is {this.state.age}</p>
                <form onSubmit={(event) => this.handleOnsubmit(event)}> 
                    <label>your name: </label>
                    <input 
                        onChange={(event) => this.handleOnchangeInput(event)} 
                        type="text"
                        value={this.state.name}
                    />
                    <br></br>                        
                    <label>your age: </label>
                    <input 
                        onChange={(event) => this.handleOnchangeAge(event)} 
                        type="text"
                        value={this.state.age}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo