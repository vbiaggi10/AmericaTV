import React, { Component } from 'react';

class Mini extends Component {
    click(e){
        // console.log(e.target.id);
        
        this.props.handleClick(e.target.id)
    }
    render() {
        return (
            <table className="table table-striped ">
                <tbody>
                    <tr>
                        <th scope="row" id={`${this.props.hour}:00 - ${this.props.hour}:10`} onClick={this.click.bind(this)}>{this.props.hour}:00 - {this.props.hour}:10</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row" id={`${this.props.hour}:10 - ${this.props.hour}:20`} onClick={this.click.bind(this)}>{this.props.hour}:10 - {this.props.hour}:20</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row" id={`${this.props.hour}:20 - ${this.props.hour}:30`} onClick={this.click.bind(this)}>{this.props.hour}:20 - {this.props.hour}:30</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row" id={`${this.props.hour}:30 - ${this.props.hour}:40`} onClick={this.click.bind(this)}>{this.props.hour}:30 - {this.props.hour}:40</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row" id={`${this.props.hour}:40 - ${this.props.hour}:50`} onClick={this.click.bind(this)}>{this.props.hour}:40 - {this.props.hour}:50</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row" id={`${this.props.hour}:50 - 0${parseInt(this.props.hour) + 1}:00`} onClick={this.click.bind(this)}>{this.props.hour}:50 - 0{parseInt(this.props.hour) + 1}:00</th>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        )
    }
}

export default Mini;