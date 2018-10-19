import React, {Component} from 'react';
import Table from './ComponentTable/Table';

class App extends Component {
    render() {
        const characters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];

        return (
            <div className="App">
                <Table employeeData={characters} />
            </div>
        );
    }
}

export default App;