import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import LabelAttribute from './LabelAttribute';
import {strings} from '../strings';

const labels = strings.header;

export class CardHeader extends Component {

    values = Object.assign({}, this.props);
    onChange = () => {console.log(this.values);};

    render() {
        return <Container>
            <Row>
                <Col>
                    <LabelAttribute
                        label={labels.name}
                        value={this.values.name}
                        onChange={(val) => {this.values.name=val; this.onChange()}}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.nature}
                        value={this.values.nature}
                        onChange={(val) => {this.values.nature=val; this.onChange()}}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.generation}
                        value={this.values.generation}
                        onChange={(val) => {this.values.generation=val; this.onChange()}}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <LabelAttribute
                        label={labels.player}
                        value={this.values.player}
                        onChange={(val) => {this.values.player=val; this.onChange()}}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.demeanor}
                        value={this.values.demeanor}
                        onChange={(val) => {this.values.generation=val; this.onChange()}}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.role}
                        value={this.values.role}
                        onChange={(val) => {this.values.role=val; this.onChange()}}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <LabelAttribute
                        label={labels.saga}
                        value={this.values.saga}
                        onChange={(val) => {this.values.saga=val; this.onChange()}}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.clan}
                        value={this.values.clan}
                        onChange={(val) => {this.values.clan=val; this.onChange()}}
                    />
                </Col>
                <Col>
                    <LabelAttribute
                        label={labels.shelter}
                        value={this.values.shelter}
                        onChange={(val) => {this.values.shelter=val; this.onChange()}}
                    />
                </Col>
            </Row>
        </Container>
    }
}