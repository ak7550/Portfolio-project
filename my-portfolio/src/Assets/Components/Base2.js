import React, { Fragment } from 'react'
import Menu from './Menu'
import Particle from './Particle'
import '../css/style.css'
import face from '../Images/MyImage.svg'
import horizontalLine from '../Images/WhiteStraightLine.svg'
import { Col, Row, Image } from 'react-bootstrap'
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
            <Fragment>
                <Row className="justify-content-md-center py-5 my-5 ">
                    <Col align="center" className=" ">
                        <Row>
                            <Col align="center" className=" ">
                                <Image src={face} alt="My Face" className="img img-fluid face float-xl-right pt-3 mt-5" roundedCircle />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xl={7} ></Col>
                            <Col className="icons" >
                                <Row className="justify-content-md-center">
                                    <Col>
                                        <SocialMediaLinks className="" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={1} ></Col>
                        </Row>
                    </Col>
                    <Col xl={7} className="text-white text-xl-left text-center px-5 mx-5">
                        <Row>
                            <Col className="intro mt-5 ">
                                {title}
                            </Col>
                        </Row>
                        <Row className="mr-auto pr-3">
                            <Col className="">
                                <Image src={horizontalLine} alt="Horizontal-line" className="float-xl-left " roundedCircle />
                            </Col>
                        </Row>
                        <Row className="mr-auto pt-3 pr-3 description" >
                            <Col>
                                <p style={{ maxWidth: '45rem', }} >
                                    I'm a 3<span className="sup font-weight-light">rd</span>  year student pursuing B.E. in Information Technology from <a href="http://" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Jadavpur University</a>, Kolkata. I've born and brought up in <a href="http://" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Malda</a>, WestBengal.
                                </p>
                            </Col>
                        </Row>
                        <Row className="pt-3 pr-3 description" >
                            <Col>
                                <p style={{ maxWidth: '45rem', }} >
                                    A guy passionated to coding and developping new stuff with a little bit of graphic designing skills.
                                </p>
                            </Col>
                        </Row>
                        <Row className="pt-3 pr-3 description" >
                            <Col>
                                <p style={{ maxWidth: '45rem', }} >
                                    I mostly spend my entire day with my laptop, hanging out with friends, or watching some bengali movies.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        </>
    )
}


export default Base
