//giai đoạn đầu khóa học sẽ dùng class component

import React from "react";
import UsersInfo from "./UsersInfo";

class Mycomponent extends React.Component {

    

    render() { // tập hợp các khối html và render ra giao diện
        return (
            <div>
                
                <UsersInfo/>
            </div>
        );

    }


}

export default Mycomponent;