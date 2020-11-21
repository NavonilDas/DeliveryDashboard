import React from 'react';
import axios from 'axios';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all: [], // Complete Data Array.
            categorized: {
                DEL: []
            },
            cats: [], // Categories.
            selected: "DEL", // Current Selected Category.
            scan: [] // Shipment Info array.
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

    /**
     * https://reactjs.org/docs/react-component.html#componentdidmount
     */
    componentDidMount() {
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
                    
                    // Update States.
                    this.setState({ all: data, categorized: tmp, cats: cats });
                }

            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="site-content">
            </div>
        );
    }
}
export default Content;