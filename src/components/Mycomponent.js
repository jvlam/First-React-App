//giai đoạn đầu khóa học sẽ dùng class component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UsersInfo from "./UsersInfo";

class Mycomponent extends React.Component {

    

    render() { // tập hợp các khối html và render ra giao diện

        const myInfo = {
            name: 'Vu Anh Lam',
            age: 20,
            address: 'ha noi'
        }
        return (
            <div>
                <UsersInfo/>
                <br></br>
                <DisplayInfo name="Thien tai" age="50" info={myInfo}></DisplayInfo>
            </div>
        );

    }


}

export default Mycomponent;