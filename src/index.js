import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { Chair } from './schema.js';
import { cinemas } from './cinemas.js';
import { images } from './images.js';
import { altImages } from './altImages.js';
import { Modal } from 'antd';
let changeCinema = [];
for (let i = 1; i <= images.length; i++) {
    changeCinema[i] = cinemas[0];
}

class Film extends React.Component {
    render() {
        return (
            <div>
                <div className="filmTitle">{this.props.altImage}</div>
                <p />
                <img src={this.props.image} alt={this.props.altImage} className="image" />
                <Option list={cinemas} id={this.props.id} />,
                <Button id={this.props.id} />
            </div>
        );
    }
}
class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { cinema: '' };
    }
    handleChange(e) {
        alert(this.props.id);
        this.state = { cinema: e.target.value };
        changeCinema[this.props.id] = this.state.cinema;
        //  alert(this.state.cinema);
    }
    render() {
        return (
            <div>
                <select className="select" onChange={this.handleChange}>
                    {this.props.list.map(function(item) {
                        return <option className="opt">{item}</option>;
                    })}
                </select>
            </div>
        );
    }
}
class Button extends React.Component {
    handleClick(e) {
        alert(this.props.id);
        e.preventDefault();
        alert(changeCinema[this.props.id]);
    }
    render() {
        return (
            <div>
                <button className="buy" title="Купить билеты на этот фильм" onClick={e => this.handleClick(e)}>
                    Купить билеты
                </button>
            </div>
        );
    }
}
const column1 = [0, 3, 6];
const column2 = [1, 4, 7];
const column3 = [2, 5, 8];
class PainterColumnThree extends React.Component {
    render() {
        return (
            <div>
                {this.props.form.map(item => {
                    return (
                        <div>
                            <Film image={images[item]} altImage={altImages[item]} id={item + 1} />
                        </div>
                    );
                })}
            </div>
        );
    }
}
class PainterColumnTwo extends React.Component {
    render() {
        return (
            <div>
                {this.props.form.map(item => {
                    return (
                        <div>
                            <Film image={images[item]} altImage={altImages[item]} id={item + 1} />
                        </div>
                    );
                })}
                <div className="column-three">
                    <PainterColumnThree form={column3} />
                </div>
            </div>
        );
    }
}
class PainterColumnOne extends React.Component {
    render() {
        return (
            <div className="column-one">
                {this.props.form.map(item => {
                    return (
                        <Film image={images[item]} altImage={altImages[item]} id={item + 1} className="column-one" />
                    );
                })}
                <div className="column-two">
                    <PainterColumnTwo form={column2} />
                </div>
            </div>
        );
    }
}

class Window extends React.Component {
    getInitialState() {
        return { modal: true };
    }

    render() {
        return (
            <Modal>
                <h2>This is the modal</h2>
                <input type="text" placeholder="Enter your name" />
                <input type="button" value="Send" onClick={this.handleModal} />
            </Modal>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">Закажи билеты в кино онлайн на нужный фильм!</h1>
                <div>
                    <PainterColumnOne form={column1} />
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Title />, document.getElementById('root'));
