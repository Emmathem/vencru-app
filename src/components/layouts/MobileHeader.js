import React from 'react';
import ProductLogo from '../../assets/img/project_logo.png';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from 'react-icons/ri';

const MobileHeader = () => {
    return (
        <div className="bg-white h-[75px] transition px-6 py-4 flex items-center flex items-center justify-between border-b-2 border-[#EAECF0]">
            <Link to="/dashboard" className="cursor-pointer flex items-center">
                <img src={ProductLogo} alt="logo" />
                <h4 className="text-2lg font-bold pl-2">Untitled UI</h4>
            </Link>
            <div className="cursor-pointer">
                <RiMenu2Fill size="30px" className="text-[#667085]" />
            </div>
        </div>
    );
};

export default MobileHeader;
