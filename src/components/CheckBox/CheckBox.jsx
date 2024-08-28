import React, { useState } from 'react';
import './CheckBox.css';

function CheckBox({ label }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div
            className={`checkBox-container ${isChecked ? 'checked' : ''}`}
            onClick={handleCheckboxClick}
        >
            <label htmlFor={label}>{label}</label>
            <input
                type="checkbox"
                id={label}
                checked={isChecked}
                onChange={handleCheckboxClick}
            />
        </div>
    );
}

export default CheckBox;
