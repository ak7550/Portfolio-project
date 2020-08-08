import React from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { FaInstagram, FaFacebook, FaFacebookF, FaFacebookSquare, FaDribbble, FaLinkedin, FaGithub, FaBehance, FaMediumM, FaQuora, FaRedditAlien, FaStackOverflow, FaStackExchange, FaTelegram, FaTwitter, FaDiscord, } from 'react-icons/fa'
import { Link, Route } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'

const SocialMediaLinks = ({ name }) => {
    const setIcon = (name) => {
        switch (name) {
            case "Instagram":
                return <FaInstagram className="faicons" />
            case "Linkedin":
                return <FaLinkedin className="faicons" />
            case "Github":
                return <FaGithub className="faicons" />
            case "Gmail":
                return <FiMail className="faicons" />
            default:
                return <FaDiscord className="faicons" />
        }
    }
    
    return (
        <OverlayTrigger
            target="hover"
            placement="bottom-end" 
            delay={{ show: 250, hide: 400 }}
            overlay={() =>
                <Tooltip id="tooltip" >
                    <strong>
                        {name}
                    </strong>
                </Tooltip>
            }
        >
            <a href="#" className="text-white">{setIcon(name)}</a>
        </OverlayTrigger>
    )
}

export default SocialMediaLinks
