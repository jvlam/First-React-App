//giai đoạn đầu khóa học sẽ dùng class component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class Mycomponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Vu Anh Lam', age: "18"},
            {id: 2, name: 'Vu Anh quan', age: "36"},
            {id: 3, name: 'Vu Anh anh', age: "16"},
        ]
    }

    handleAddNewUser = (user) => {
        // let listUsersNew = [...this.state.listUsers]         //===> thao tác trực tiếp lên state sẽ gặp bug trong tương lai
        // listUsersNew.unshift(user)
        // this.setState({
        //     listUsers: listUsersNew          //======> bad code
        // })

        this.setState({ // cách code 1
            listUsers: [user, ...this.state.listUsers]
        })
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
                <AddUserInfo
                    handleAddNewUser = {this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfo 
                    listUsers = {this.state.listUsers}
                />
            </div>
        );

    }


}

export default Mycomponent;