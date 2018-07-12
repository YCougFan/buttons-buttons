// Checkbox and Radio Buttons (Stateful Buttons)
// In order to have checkbox and radio buttons, your component needs to manage the state of which button(s) are
// active/select. It is not in the opinion of this library to manage state within it's components so it is left up to
// you. Below is a simple example showcasing how this could be done uses the components which already exist in this library.
import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class ReactstrapCheckedRadio extends Component {
    constructor (props) {
        super(props);

        this.state = { cSelected: [] };

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
    }

    render() {
        return (
            <div>
                <h5>Radio Buttons</h5>
                <ButtonGroup>
                    <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
                </ButtonGroup>
                <p>Selected: {this.state.rSelected}</p>

                <h5>Checkbox Buttons</h5>
                <ButtonGroup>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
            </div>
        );
    }
}

export default ReactstrapCheckedRadio;