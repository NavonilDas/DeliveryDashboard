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
            <div className={(this.props.scan.length === 0) ? '' : "more-info"} style={{ minWidth: "400px" }}>
                {(this.props.scan.length === 0) ? '' : (
                    <div style={{ position: "relative", overflow: "hidden" }}>
                        <div className="c-btn">
                            <img src="./imgs/destination.svg" alt="Destination" style={{ paddingLeft: "10px" }} />
                        </div>

                        <div className="dot-line"></div>
                        {
                            this.props.scan.map((ele, ind) => (
                                <div className="status-row" key={ind}>
                                    <div className="dot"></div>
                                    <hr></hr>
                                    <div className={`content ${ind === 0 ? 'active' : ''}`}>
                                        <span className="status">{ele.status_detail}</span>
                                        <span className="date">{this.parseDashedDate(ele.time)}</span>
                                        <span className="time">{this.parseTime(ele.time)}</span>
                                    </div>
                                </div>

                            ))
                        }

                        <div className="c-btn">
                            <img src="./imgs/warehouse.svg" alt="warehouse" />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default ShipmentInfo;