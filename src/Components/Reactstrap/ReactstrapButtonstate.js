import React from 'react';
import { Button } from 'reactstrap';

export default class ReactstrapButtonstate extends React.Component {
    render() {
        return (
            <div>
                {/*Active State*/}
                <Button color="primary" size="lg" active>Primary link</Button>{' '}
                <Button color="secondary" size="lg" active>Link</Button>
                {/*Disabled State*/}
                <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
                <Button color="secondary" size="lg" disabled>Button</Button>
            </div>
        );
    }
}