import React from 'react';
import './CheckBox.css';

function CheckBox({ label, checked, onChange }) {

    return (
        <div
            className={`checkBox-container ${checked ? 'checked' : ''}`}
            onClick={onChange}
        >
            <label htmlFor={label} id='lable'>{label}</label>
            <input
                type="checkbox"
                id={label}
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
}

export default CheckBox;
