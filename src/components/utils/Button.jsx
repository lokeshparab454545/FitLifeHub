import "../../components/Header/header.css"

import React from 'react'

const Button = ({ name }) => {
    return (
        <button className='register_btn'>{name}</button>
    )
}

export default Button
