import React from "react";
import Axios from "../node_modules/axios";

// call api and show data in table
export default class CallApi extends React.Component {

    state = {
        customers: []
    }

    // fetch api and set state
    componentDidMount() {
        Axios.get("api/customers")
            .then(res => {
                const customers = res.data;
                this.setState({ customers })
            });
    }

    // show data retrieved
    render() {
        return (

            <div className="CallApi">
                <p>1st React webpage (datasource fr api)</p>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Name
                            </td><td>
                                Credit
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map(customer =>
                            <tr>
                                <td>{customer.Society}</td>
                                <td>{customer.Credit}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

}
