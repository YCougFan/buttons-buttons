import React from 'react';
import { Button } from 'reactstrap';

export default class ReactstrapButtonSizes extends React.Component {
    render() {
        return (
            <div>
                <Button color="primary" size="lg">Large Button</Button>{' '}
                <Button color="secondary" size="lg">Large Button</Button>
                {/*blank size reverts to default which is medium*/}
                <Button color="primary" size="">Default Button</Button>{' '}
                <Button color="secondary" size="med">Medium Button</Button>{' '}
                <Button color="primary" size="sm">Small Button</Button>{' '}
                <Button color="secondary" size="sm">Small Button</Button><br/><br/>
                <Button color="primary" size="lg" block>Block level button</Button>
                <Button color="secondary" size="lg" block>Block level button</Button>
                <Button color="primary" size="med" block>Block level button</Button>
                <Button color="secondary" size="med" block>Block level button</Button>
                <Button color="primary" size="sm" block>Block level button</Button>
                <Button color="secondary" size="sm" block>Block level button</Button>
            </div>
        );
    }
}