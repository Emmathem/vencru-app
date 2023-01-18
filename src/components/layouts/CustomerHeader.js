import React from 'react';
import HealthLogo from '../../assets/img/healthlogo.png';

const CustomerHeader = () => {
    return (
        <div className="deepColor fixed z-50 px-8 transition rounded-b-[24px] lg:rounded-b-none w-full flex items-center h-[70px]">
            <img src={HealthLogo} alt="logo" width={150} />
        </div>
    );
};

export default CustomerHeader;
