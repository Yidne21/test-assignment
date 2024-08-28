import React from 'react'
import './CheckBox.css'

function CheckBox({ label }) {
    return (
        <div className='checkBox-container'>
            <label htmlFor="checkbox">{label}</label>
            <input type="checkbox" id="checkbox" />
        </div>
    )
}

export default CheckBox