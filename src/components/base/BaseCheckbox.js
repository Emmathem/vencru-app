import React from 'react';

const BaseCheckbox = ({ id, name, handleClick, isChecked }) => {
    return <input id={id} name={name} className="w-5 h-5" type="checkbox" onChange={handleClick} checked={isChecked} />;
};

export default BaseCheckbox;
