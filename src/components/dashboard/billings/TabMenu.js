import React from 'react';
import { settingMenu } from '../../../data/utils';
import { Divider } from 'antd';
import BillingContactSection from './BillingContactSection';
import BillingCardSection from './BillingCardSection';
import BillingRecordSection from './BillingRecordSection';

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
            <div className="mt-8">
                <div>
                    <h1 className="text-[#101828] text-[18px] font-medium leading-8">Payment Method</h1>
                    <h3 className="text-[#667085] text-[14px]">Update your billing details and address.</h3>
                </div>
                <Divider />
                <BillingContactSection />
                <Divider />
                <BillingCardSection />
                <BillingRecordSection />
            </div>
        </>
    );
};

export default TabMenu;
