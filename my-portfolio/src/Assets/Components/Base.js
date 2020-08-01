import React from 'react'
import Menu from './Menu'
// import '../css/style.css'
const Base = ({
    title = "The default Base Title",
    description = "Default description",
    className = "",
    children
}) => {
    return (
        <>
            <Menu />
            <div className="red">a</div>
            <div className="blue">b</div>
            <div className="red">a</div>
            <div className="blue">b</div>
        </>
    )
}

export default Base
