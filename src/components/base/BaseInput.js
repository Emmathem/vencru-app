import React from 'react';
import PropTypes from 'prop-types';

const BaseInput = ({
    // label,
    id,
    type,
    styleClass = '',
    maxLength,
    minLength,
    value,
    name,
    disabled = false,
    required = false,
    change,
    hasError = false,
    errorMsg = '',
    bodyStyles = '',
    // focus,
    blur,
}) => {
    return (
        <div className={`relative ${bodyStyles}`}>
            <input
                type={type}
                id={id}
                defaultValue={value}
                name={name}
                className={`${styleClass} block flex items-center rounded-lg px-4 h-[56px] pb-2.5 w-full text-[14px] text-[#767B86] ${
                    !value ? 'bg-[#F9FAFC] dark:bg-[#F9FAFC]' : 'bg-white'
                } border border-[#E5E9F2] appearance-none dark:text-[#2D2D31] dark:border-[#E5E9F2] dark:focus:border-[#A0A1B9] 
                    focus:outline-none not:empty:bg-white active:bg-white focus:ring-0 focus:border-[#A0A1B9] peer ${
                        hasError && 'border border-[#F85359] dark:border-[#F85359]'
                    } ${disabled && 'border-[#A0A1B9] opacity-50 cursor-not-allowed'}`}
                placeholder=" "
                onChange={change}
                maxLength={maxLength}
                minLength={minLength}
                disabled={disabled}
                required={required}
                onBlur={blur}
            />
            {/*<label
                htmlFor={id}
                className="absolute pl-2 z-[1] text-[14px] text-[#575A65] dark:text-[#575A65] duration-300 transform -translate-y-[0.6rem] scale-75 top-4 origin-[0] left-2.5 peer-focus:text-[#575A65] peer-focus:dark:text-[#575A65] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[0.6rem]"
            >
                {label}
            </label>*/}
            {hasError && <p className="text-[#F85359] text-[12px] pt-1">{errorMsg}</p>}
        </div>
    );
};

BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
};

export default BaseInput;
