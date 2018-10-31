import React, { Component } from 'react';

class Mini extends Component {
    render() {
        return (
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">{this.props.hour}:00 - {this.props.hour}:10</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">{this.props.hour}:10-{this.props.hour}:20</th>
                        <td></td> 
                    </tr>
                    <tr>
                        <th scope="row">{this.props.hour}:20-{this.props.hour}:30</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">{this.props.hour}:30-{this.props.hour}:40</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">{this.props.hour}:40-{this.props.hour}:50</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">{this.props.hour}:50-{this.props.hour}:60</th>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        )
    }
}

export default Mini;