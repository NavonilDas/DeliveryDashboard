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

    /**
     * Function to parse DateTime String into format dd/mm/yyyy.
     * @param {string} date DateTime
     */
    parseDate(date) {
        let out = new Date(date);
        let day = out.getDate();
        let mon = out.getMonth();
        return `${day < 10 ? '0' : ''}${day}/${mon < 10 ? '0' : ''}${mon}/${out.getFullYear()}`;
    }

    render() {
        return (
            <div className="site-content">
            </div>
        );
    }
}
export default Content;