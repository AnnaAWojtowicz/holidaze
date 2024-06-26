import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ExampleImage1 from "../img/luke-stackpoole-eWqOgJ-lfiI-unsplash4.jpg";
import ExampleImage2 from "../img/nachelle-nocom-51adhgg5KkE-unsplash.jpg";
import ExampleImage3 from "../img/roberto-nickson-bwIqQ5qQhXs-unsplash5.jpg";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CarouselHome() {
    return (
        <div className="carouselWrapper">
            <Carousel className="containerCarouselHome">
                <Carousel.Item className="carouselItemHome">
                    <img src={ExampleImage1} />
                    <Carousel.Caption>
                        <Container className="lessonContainer">
                            <Row>
                                <Col sm={12} md={4} className="word">Sisu</Col>
                                <Col sm={12} md={7} className="line">
                                    <div className="phonetic">/ˈsiːsuː/</div>
                                    <div className="def">Sisu is a Finnish concept that embodies determination, resilience, and courage, empowering individuals to conquer challenges.</div>
                                    <div className="example">"I think staying in this cottage may strengthen my sisu."</div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="phrase">Holidaze will help you find the perfect place for whatever reason</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItemHome">
                    <img src={ExampleImage2} />
                    <Carousel.Caption>
                        <Container className="lessonContainer">
                            <Row>
                                <Col md={4} className="word">Hygge</Col>
                                <Col md={7} className="line">
                                    <div className="phonetic">/ˈh(j)uːɡə/</div>
                                    <div className="def">Hygge is a Danish concept encompassing coziness, comfort, and contentment in creating a warm and inviting atmosphere.</div>
                                    <div className="example">"Is it even possible to have more hygge than this?"</div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="phrase">Holidaze will help you find the perfect place for whatever reason</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItemHome">
                    <img src={ExampleImage3} />
                    <Carousel.Caption>
                        <Container className="lessonContainer">
                            <Row>
                                <Col md={4} className="word">Fika</Col>
                                <Col md={7} className="line">
                                    <div className="phonetic">/fiːka/</div>
                                    <div className="def">Fika is a Swedish custom that emphasizes the importance of taking a break to enjoy coffee, usually accompanied by pastries, while socializing with others.</div>
                                    <div className="example">"It would be just perfect to have fika here!"</div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="phrase">Holidaze will help you find the perfect place for whatever reason</div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselHome;