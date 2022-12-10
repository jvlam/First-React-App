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

    handleClick(event) {
        // console.log('click me by button');
        // console.log(event);
        console.log(this.state.name);
    }

    handleOnMouseOver(event) {
        console.log(event);
    }

    render() { // tập hợp các khối html và render ra giao diện


        return (
            <div>
                my name is {this.state.name} and my address is {this.state.address}
                <button onMouseOver={this.handleClick}>Hover me</button>    
                <button onClick={this.handleClick}>Click me</button>    
            </div>
        );

    }


}

export default Mycomponent;