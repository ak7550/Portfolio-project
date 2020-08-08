import React, { Fragment } from 'react'
import Menu from './Menu'
import Particle from './Particle'
import face from '../Images/MyImage.svg'
import { Container, Row, Col, Image } from 'react-bootstrap'
import horizontalLine from '../Images/WhiteStraightLine.svg'
import SocialMediaLinks from './SocialMediaLinks'

const Base = ({
    title = "The default Base Title",
    description = "Default description",
    className = "",
    children
}) => {
    return (
        <>
            <Menu />
            <Particle />
            <Container className="mt-5 pt-5">
                <Row className="">
                    <Col xl={4} className="text-xl-right text-center text-white mt-5">
                        <Image src={face} alt="My Face" className="face" />
                        <Row className="justify-content-lg-center  mx-auto icons mt-1" style={{ maxWidth: "42rem"}}>
                            <Col className="float-lg-center float-left">
                                <SocialMediaLinks />
                            </Col>
                            <Col xl={2} ></Col>
                        </Row>
                    </Col>
                    <Col xl={8} className="text-xl-left  text-center text-white">
                        <Row>
                            <Col xl={1}></Col>
                            <Col className="intro mt-5 ">
                                {title}
                            </Col>
                        </Row>
                        <Row className="horizontal-line">
                            <Col xl={1}></Col>
                            <Col className="">
                                <Image src={horizontalLine} alt="Horizontal-line" className="float-xl-left " roundedCircle />
                            </Col>
                        </Row>
                        <Row className="mr-auto pt-3 description" >
                            <Col xl={1}></Col>
                            <Col>
                                <p style={{ maxWidth: '45rem', }} >
                                    I'm a 3<span className="sup font-weight-light">rd</span>  year student pursuing B.E. in Information Technology from <a href="http://" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Jadavpur University</a>, Kolkata. I've born and brought up in <a href="http://" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Malda</a>, WestBengal.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mr-auto pt-3 description" >
                            <Col xl={1}></Col>
                            <Col>
                                <p style={{ maxWidth: '45rem', }} >
                                    A guy passionated to coding and developping new stuff with a little bit of graphic designing skills.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mr-auto pt-3 description" >
                            <Col xl={1}></Col>
                            <Col>
                                <p style={{ maxWidth: '45rem', }} >
                                    I mostly spend my entire day with my laptop, hanging out with friends, or watching some bengali movies.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Base
