import React, {Component} from 'react';

class Table extends Component {
    render() {
        const { employeeData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody employeeData={ employeeData } />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return <tbody></tbody>;
}

export default Table;