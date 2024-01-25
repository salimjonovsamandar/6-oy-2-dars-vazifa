import './index.css'
import React from 'react'
import Button from '../Button'

export default function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <a href="#">LOGO</a>
            </div>
            <div className="nav">
                <a href="#">Home</a>
                <a href="#">Courses</a>
                <a href="#">Gallery</a>
                <a href="#">About</a>
                <a href="#">{<Button />}</a>
            </div>
            <div className="btn">
                <Button />
            </div>
        </div>
    )
}
