import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { FaInstagram, FaFacebook, FaFacebookF, FaFacebookSquare, FaDribbble, FaLinkedin, FaGithub, FaBehance, FaMediumM, FaQuora, FaRedditAlien, FaStackOverflow, FaStackExchange, FaTelegram, FaTwitter, FaDiscord, } from 'react-icons/fa'
import { Link, Route } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'

const SocialMediaLinks = () => {
    return (
        <>
            <a href="#" className="text-white"><FaInstagram className="faicons"/></a>
            <a href="#" className="text-white"><FaGithub className="faicons"/></a>
            <a href="#" className="text-white"><FiMail className="faicons"/></a>
            <a href="#" className="text-white"><FaLinkedin className="faicons"/></a>
        </>
    )
}

export default SocialMediaLinks
