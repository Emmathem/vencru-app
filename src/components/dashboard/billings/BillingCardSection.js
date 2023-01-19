import React from 'react';
import VisaIcon from '../../../assets/img/icons/visaIcon.png';
import MasterIcon from '../../../assets/img/icons/masterIcon.png';
import { FiPlus } from 'react-icons/fi';

const BillingCardSection = () => {
    // const checkForAddress = () => {};

    return (
        <>
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-1/4">
                    <div>
                        <h1 className="text-[#344054] text-[14px] font-medium leading-7">Card details</h1>
                        <h3 className="text-[#667085] text-[14px] font-normal">Select default payment method.</h3>
                    </div>
                </div>
                <div className="lg:w-3/4 w-full lg:pl-20 pl-0">
                    <div>
                        <div className="flex flex-col mt-6">
                            <div className="lg:w-full bg-[#F9F5FF] border border-[#D6BBFB] rounded-[8px] p-4 transition relative">
                                <label htmlFor="visa" className="flex items-start">
                                    <div>
                                        <img src={VisaIcon} alt="VisaIcon" />
                                    </div>
                                    <div className="pl-3 leading-7">
                                        <h4 className="text-[#53389E] font-medium">Visa ending in 1234</h4>
                                        <h5 className="text-[#7F56D9] font-normal text-[14px]">Expiry 06/2024 </h5>
                                        <div className="flex items-center cursor-pointer text-[14px]">
                                            <div className="text-[#7F56D9] pr-2">Set as default</div>{' '}
                                            <div className="text-[#6941C6] font-medium">Edit</div>
                                        </div>
                                    </div>
                                    <input type="radio" name="paymentType" id="visa" className="absolute right-5" />
                                </label>
                            </div>
                            <div className="lg:w-full bg-[#FFFFFF] border border-[#EAECF0] rounded-[8px] p-4 mt-4 transition relative">
                                <label htmlFor="master" className="flex items-start">
                                    <div>
                                        <img src={MasterIcon} alt="MasterIcon" />
                                    </div>
                                    <div className="pl-3 leading-7">
                                        <h4 className="text-[#53389E] font-medium">Mastercard ending in 1234</h4>
                                        <h5 className="text-[#7F56D9] font-normal text-[14px]">Expiry 06/2024 </h5>
                                        <div className="flex items-center cursor-pointer text-[14px]">
                                            <div className="text-[#7F56D9] pr-2">Set as default</div>{' '}
                                            <div className="text-[#6941C6] font-medium">Edit</div>
                                        </div>
                                    </div>
                                    <input type="radio" name="paymentType" id="master" className="absolute right-5" />
                                </label>
                            </div>
                            <div className="flex items-center pt-4 cursor-pointer text-[#667085]">
                                <FiPlus size="20px" />
                                <span className="text-[#667085] font-medium text-[14px] pl-2">
                                    Add new payment method
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillingCardSection;
