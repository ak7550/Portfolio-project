import React, { Fragment } from 'react'
import Menu from './Menu'
import Particle from './Particle'
import face from '../Images/MyImage.svg'
import { Container, Row, Col, Image } from 'react-bootstrap'
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
            <Container className="">
                <Row className="mt-5 pt-5">
                    <Col xl={4} className="text-xl-right text-center text-white">
                        <Image src={face} alt="My Face" className="face" />
                        <Row className="justify-content-lg-center  mx-auto icons mt-1" style={{ maxWidth: "42rem"}}>
                            <Col className="float-lg-center float-left">
                                <SocialMediaLinks />
                            </Col>
                            <Col xl={2} ></Col>
                        </Row>
                    </Col>
                    <Col xl={8} className="text-xl-left  text-center text-white"></Col>
                </Row>
            </Container>
        </>
    )
}

export default Base
