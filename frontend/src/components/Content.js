import './Content.css';
import React from 'react';
import axios from 'axios';
import Card from './Card';
import ShipmentInfo from './ShipmentInfo';
import Table from './Table';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorized: {
                DEL: []
            },
            cats: [], // Categories.
            selected: "DEL", // Current Selected Category.
            scan: [], // Shipment Info array.
            down_arrow: true,
            loading: true
        };

        this.filterAWB = this.filterAWB.bind(this);
        this.rowClick = this.rowClick.bind(this);
    }

    /**
     * Filter rows Based on the AWB number.
     */
    filterAWB() {
        // Copy The Category.
        let categorized = this.state.categorized;
        // Reverse The Original Array.
        categorized[this.state.selected] = categorized[this.state.selected].reverse();
        // Change the State.
        this.setState({
            down_arrow: !this.state.down_arrow,
            categorized: categorized
        });
    }

    /**
     * Table row Click Listener.
     * @param {Array} item Array of Shipment info (Scan)
     */
    rowClick(item) {
        let scan = (item) ? item : [];
        // TODO: Check if Data is not sorted based on date.
        // scan = scan.sort((a,b)=>{
        //     return (new Date(a)) - (new Date(b));
        // });
        this.setState({ scan: [] });

        // Set Timeout is used just to notify user that the values are update.
        setTimeout(() => {
            this.setState({ scan: scan })
        }, 700);

    }

    /**
     * https://reactjs.org/docs/react-component.html#componentdidmount
     */
    componentDidMount() {
        // FIXME: Beared Token Should not be used like this.
        // Post Body.
        let data = {
            'email': "mayankmittal@intugine.com"
        };
        // Headers
        let congif = {
            headers: {
                'Authorization': 'Bearer tTU3gFVUdP'
            }
        };
        let url = 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank';
        // Send a Post Request.
        axios.post(url, data, congif)
            .then((res) => {
                // Check if we have received data.
                if (res?.data?.data) {
                    let data = res.data.data;
                    let tmp = {}, cats = [];

                    // Sort Data Based on AWB Number
                    data = data.sort((a, b) => (+a.awbno) - (+b.awbno));
                    // Split the data array on the basis of categories.
                    for (var ele of data) {
                        if (ele.current_status_code in tmp) {
                            tmp[ele.current_status_code].push(ele);
                        } else {
                            // Store Category.
                            cats.push(ele.current_status_code);

                            tmp[ele.current_status_code] = [ele];
                        }
                    }
                    cats = cats.sort();
                    // Update States.
                    this.setState({ categorized: tmp, cats: cats, loading: false });
                }

            })
            .catch((err) => {
                // NOTE: Modals Can be Used instead of alert.
                alert('Error With API Please Look into Console.');
                console.log(err);
            });
    }

    render() {
        return (
            <div className="site-content">

                {/* Cards Bar */}
                <div className="cards-bar">
                    <div>
                        <img src="./imgs/Loading.svg" alt="Loading SVG" style={{ display: (this.state.loading ? 'block' : 'none') }} />
                        {this.state.cats.map((ele, ind) => (
                            <Card
                                name={ele}
                                value={this.state.categorized[ele].length}
                                key={ind}
                                active={ele === this.state.selected}
                                onClick={() => {
                                    this.setState({
                                        scan: [], // Hide Already Visible Shipment info.
                                        selected: ele // Select The Current Category.
                                    });
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Table and Shipment Info */}
                <div className="data-info">

                    <div style={{ minWidth: "490px" }}>
                        <ShipmentInfo scan={this.state.scan} />
                    </div>

                    {this.state.loading ? '' : (
                        <Table
                            downArrow={this.state.down_arrow}
                            data={this.state.categorized[this.state.selected]}
                            fiterAWB={this.filterAWB}
                            rowClick={this.rowClick}
                        />
                    )}

                </div>


            </div>
        );
    }
}
export default Content;