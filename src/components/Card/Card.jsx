import React from 'react'
import './Card.css'
import CheckBox from '../CheckBox/CheckBox'
import Button from '../Button/Button'
import Divider from '../Divider/Divider'

const labes = ['page 1', 'page 2', 'page 3', 'page 4', 'page 5', 'page 6']

function Card() {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <CheckBox label="All pages" />
            </div>
            <Divider />
            <div className='card-body'>
                {labes.map((label, index) => (
                    <CheckBox key={index} label={label} />
                ))}
            </div>
            <Divider />
            <div className='card-footer'>
                <Button />
            </div>
        </div>
    )
}

export default Card