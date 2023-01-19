import React from 'react';

const BaseRadio = ({ styles = '', value, name, id, children, change }) => {
    return (
        <div className={`${styles} radio-control mb-6`}>
            <input id={id} name={name} type="radio" defaultValue={value} onChange={change} />
            <label htmlFor={id} className="flex radio-label">
                {children}
            </label>
        </div>
    );
};

export default BaseRadio;
