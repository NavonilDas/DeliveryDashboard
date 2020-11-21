import React from 'react';
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all: [],
            categorized: {
                DEL: []
            },
            cats: [],
            selected: "DEL",
            scan: []
        };
    }
    
    render() {
        return (
            <div className="site-content">


            </div>
        );
    }
}
export default Content;