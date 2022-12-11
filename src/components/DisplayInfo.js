import React from "react";


class DisplayInfo extends React.Component {

    state = {
        isShowListUsers: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    render() {
        console.log(this.props);

        //destructuring
        const { name, age } = this.props;

        //listUsers
        const { listUsers } = this.props;

        return (
            <div>

                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                      {this.state.isShowListUsers ? 'Hide list users' : 'Show list users'}
                    </span>
                </div>

                {
                    this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <p>My name's {user.name}</p>
                                    <p>My age's {user.age}</p>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>

        )
    }
}

export default DisplayInfo