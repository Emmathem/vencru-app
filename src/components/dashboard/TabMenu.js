import React from 'react';
import { settingMenu } from '../../data/utils';

const TabMenu = ({ isActive, setActiveTab }) => {
    return (
        <>
            <div className="w-fit overflow-hidden border border-gray-300 bg-white rounded-md flex items-center">
                {settingMenu?.map((res, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`w-fit text-[#344054] ${
                                isActive === res.id && 'bg-[#F9FAFB]'
                            } px-4 py-2 text-[14px] cursor-pointer last:border-0 border-r border-[#D0D5DD]`}
                            onClick={() => setActiveTab(res.id)}
                        >
                            {res.name}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default TabMenu;
