import React from 'react'
import Menu from './Menu'

const Base = ({
    title = "The default Base Title",
    description = "Default description",
    className = "",
    children
}) => {
    return (
        <Menu />
    )
}

export default Base
