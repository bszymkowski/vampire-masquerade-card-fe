import React, {Component} from 'react';
import {Input, Container, Row, Col} from 'reactstrap'

export class LabelAttribute extends Component {

    onChange = () => {};

    render() {
        return (
            <Container>
                <Row>
                    <Col xl={{size: 4}} lg={{size: 4}}>
                        <strong>{this.props.label}: </strong>
                    </Col>
                    <Col xl={{size: 8}} lg={{size: 8}}>
                        <Input type="textArea" defaultValue={this.props.value} onChange={(e) => {this.props.onChange(e.target.value)}}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LabelAttribute;