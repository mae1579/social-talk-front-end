import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import "./Home.css";

export const Home = () => (
    <Row>
        <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h1>Rozmawiaj z użytkownikami na całym świecie</h1>
                <p>Dzięki Social-Talk przełamuj ograniczenia odległośći</p>
                <p>Zaloguj się lub stwórz konto aby rozpocząć rozmowę :)</p>
                <LinkContainer to="/login">
                    <Button variant="secondary">
                        Rozpocznij
                    </Button>
                </LinkContainer>
            </div>
        </Col>
        <Col md={6} className="home__bg"></Col>
    </Row>
);

