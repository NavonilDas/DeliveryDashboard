import './Table.css';
import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
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
        {/* Table */ }
        return (
            <div className="table-out">

                {/* Table Head */}
                <div className="table-head">
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={this.props.fiterAWB}
                    >
                        AWB Number
                        <i className={`fa ${this.props.downArrow ? 'fa-angle-down' : 'fa-angle-up'}`} />
                    </div>
                    <div>Transporter</div>
                    <div>Source</div>
                    <div>Destination</div>
                    <div>Brand</div>
                    <div>Start Date</div>
                    <div>ETD</div>
                    <div>Status</div>
                </div>

                {/* Table Body */}
                <div className="table-content">

                    {(this.props.data).map((val, ind) => (
                        <div className="row" key={ind} onClick={() => this.props.rowClick(val.scan)}>
                            <div>#{val.awbno}</div>
                            <div>{val.carrier}</div>
                            <div>{val.from}</div>
                            <div>{val.to}</div>
                            <div>USPA</div>
                            <div>{this.parseDate(val.pickup_date)}</div>
                            <div>{this.parseDate(val.time)}</div>
                            <div className="status">{val.current_status}</div>
                        </div>
                    ))}

                </div>

            </div>
        );
    }
}

export default Table;