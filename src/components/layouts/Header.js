import React from 'react';

const Header = ({ pageTitle, subPageTitle = '' }) => {
    return (
        <>
            <div className="lg:block hidden w-full items-center py-8 px-6">
                <h1 className="text-2xl font-medium text-[#101828]">{pageTitle}</h1>
                <h2 className="text-[#667085] text-md font-normal">{subPageTitle}</h2>
            </div>
        </>
    );
};

export default Header;
