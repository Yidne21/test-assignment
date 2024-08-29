import React, { useState } from 'react';
import './Card.css';
import CheckBox from '../CheckBox/CheckBox';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';

const labels = ['page 1', 'page 2', 'page 3', 'page 4', 'page 5', 'page 6'];

function Card() {
    const [checkedState, setCheckedState] = useState(
        new Array(labels.length).fill(false)
    );
    const [isAllChecked, setIsAllChecked] = useState(false);

    const handleAllCheck = () => {
        const newCheckedState = checkedState.map(() => !isAllChecked);
        setCheckedState(newCheckedState);
        setIsAllChecked(!isAllChecked);
    };

    const handleCheck = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        const isAllChecked = updatedCheckedState.every((item) => item);
        setIsAllChecked(isAllChecked);
    };

    const handleDone = () => {
        const checkedLabels = labels.filter((_, index) => checkedState[index]);
        alert(`Checked pages: ${checkedLabels.join(', ')}`);
    }

    return (
        <div className='card-container'>
            <div className='card-header'>
                <CheckBox label="All pages" checked={isAllChecked} onChange={handleAllCheck} />
            </div>
            <Divider />
            <div className='card-body'>
                {labels.map((label, index) => (
                    <CheckBox
                        key={index}
                        label={label}
                        checked={checkedState[index]}
                        onChange={() => handleCheck(index)}
                    />
                ))}
            </div>
            <Divider />
            <div className='card-footer'>
                <Button lable="Done" handleClick={handleDone} />
            </div>
        </div>
    );
}

export default Card;
