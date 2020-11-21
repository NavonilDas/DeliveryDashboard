import React from 'react';
class Header extends React.Component {
    render() {
        return (
            <header>
                <img src="./imgs/logo.svg" alt="logo" style={{ marginLeft: "50px" }} />
                <h1>Intugine</h1>
                <div style={{ flexGrow: 1 }}></div>
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Transporters</a></li>
                </ul>
                <div style={{ display: "flex" }} className="dropdown">
                    <div className="profile-img">
                        <img src="./imgs/profile.svg" />
                    </div>
                    <div className="down-arrow">
                        <i className="fa fa-angle-down fa-2x" />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;