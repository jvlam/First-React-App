//giai đoạn đầu khóa học sẽ dùng class component

import React from "react";

class Mycomponent extends React.Component {

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
        this.setState({
            name: event.target.value
        })
    }

    handleOnsubmit = (event) => {
        event.preventDefault();
    }

    render() { // tập hợp các khối html và render ra giao diện
        return (
            <div>
                <p>my name is {this.state.name}</p>
                <p>my address is {this.state.address}</p>
                <p>my age is {this.state.age}</p>
                <form onSubmit={(event) => this.handleOnsubmit(event)}> 
                    <input onChange={(event) => this.handleOnchangeInput(event)} type="text"/>
                    <button>submit</button>
                </form>
            </div>
        );

    }


}

export default Mycomponent;