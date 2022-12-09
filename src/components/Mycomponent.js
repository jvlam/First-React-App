//giai đoạn đầu khóa học sẽ dùng class component

import React from "react";

class Mycomponent extends React.Component {

    // JSX cho phép viết code javaScript trong code của html
    // điểm hạn chế JSX chỉ return về được một element duy nhất 
    // muốn code js để tạo ra nội dung reder động thì code trong dấu {.. your code..}

    render() { // tập hợp các khối html và render ra giao diện
        return (
            <div>
                my first component
            </div>
        );

    }


}

export default Mycomponent;