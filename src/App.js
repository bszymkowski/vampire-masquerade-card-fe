import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import {CardHeader} from "./card/CardHeader";

const mockData = {
    header: {
        name: 'Stefano Priano',
        player: 'Stefan Elefan',
        saga: 'Opowieść Stefana',
        nature: 'Naturszczyk',
        demeanor: 'Postawny',
        clan: 'Tzimisce',
        generation: 'XIII',
        role: 'Rolnik',
        shelter: 'Ochronka'
    }
};

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <header className="text-center">
                            <h1>Wampir: Maskarada</h1>
                        </header>
                    </Col>
                </Row >
                <CardHeader {...mockData.header}/>
            </Container>
        );
    }
}

export default App;
