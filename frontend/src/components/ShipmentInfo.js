import React from 'react';
class ShipmentInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Extracts time from DateTime string.
     * @param {string} date DateTime
     */
    parseTime(date) {
        let out = new Date(date);
        let h = out.getHours();
        let m = out.getMinutes();
        return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`;
    }

    /**
     * Converts a Date String to Date with format dd-mm-yyyy.
     * @param {string} date DateTime
     */
    parseDashedDate(date) {
        let out = new Date(date);
        let day = out.getDate();
        let mon = out.getMonth();
        return `${day < 10 ? '0' : ''}${day}-${mon < 10 ? '0' : ''}${mon}-${out.getFullYear()}`;
    }

    render() {
        return (
            <div></div>
        );
    }
}
export default ShipmentInfo;