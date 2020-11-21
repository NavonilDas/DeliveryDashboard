import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.active ? 'active' : ''} card`} onClick={this.props.onClick}>
                <span>{this.props.name}</span>
                <span style={{ marginLeft: "auto", fontSize: "2.5em" }}>{this.props.value}</span>
            </div>
        );
    }
}
export default Card;