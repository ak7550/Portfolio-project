import React from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { FaInstagram, FaFacebook, FaFacebookF, FaFacebookSquare, FaDribbble, FaLinkedin, FaGithub, FaBehance, FaMediumM, FaQuora, FaRedditAlien, FaStackOverflow, FaStackExchange, FaTelegram, FaTwitter, FaDiscord, } from 'react-icons/fa'
import { Link, Route } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'

const SocialMediaLinks = ({ name, link }) => {
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
            placement="top" 
            overlay={(props) =>
                <Tooltip id="tooltip" {...props} >
                    <strong>
                        {name}
                    </strong>
                </Tooltip>
            }
        >
            <a href={link} className="text-white">{setIcon(name)}</a>
        </OverlayTrigger>
    )
}

export default SocialMediaLinks
