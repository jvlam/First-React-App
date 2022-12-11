import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg'

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
            <div className='display-infor-container'>
                <img src={logo} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                      {this.state.isShowListUsers ? 'Hide list users' : 'Show list users'}
                    </span>
                </div>

                {
                    this.state.isShowListUsers &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <p>My name's {user.name}</p>
                                    <p>My age's {user.age}</p>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>

        )
    }
}

export default DisplayInfo