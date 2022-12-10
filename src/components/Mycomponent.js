//giai đoạn đầu khóa học sẽ dùng class component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UsersInfo from "./UsersInfo";

class Mycomponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Vu Anh Lam', age: "18"},
            {id: 2, name: 'Vu Anh quan', age: "36"},
            {id: 3, name: 'Vu Anh anh', age: "40"},
        ]
    }

    render() { // tập hợp các khối html và render ra giao diện

        const myInfo = {
            name: 'Vu Anh Lam',
            age: 20,
            address: 'ha noi'
        }

        const array = ['a', 'b', 'c']
        return (
            <div>
                <UsersInfo/>
                <br></br>
                <DisplayInfo listUsers={this.state.listUsers}></DisplayInfo>
            </div>
        );

    }


}

export default Mycomponent;