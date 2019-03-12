import React from 'react';
import ReactDOM from 'react-dom';
import './schema.css';
export class Chair extends React.Component {
    render() {
        return (
            <div id="chair">
                <button className="chair">{this.props.number}</button>
            </div>
        );
    }
}

class Row extends React.Component {
    render() {
        for (let i = 0; i < 10; i++) {
            return <Chair number={i} />;
        }
    }
}
ReactDOM.render(<Chair number="0" />, document.getElementById('root'));
