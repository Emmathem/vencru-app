import React from 'react';
import BaseRadio from '../../base/BaseRadio';
import BaseInput from '../../base/BaseInput';

const BillingContactSection = () => {
    const checkForAddress = () => {};

    return (
        <>
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-1/4">
                    <div>
                        <h1 className="text-[#344054] text-[14px] font-medium leading-7">Contact email</h1>
                        <h3 className="text-[#667085] text-[14px] font-normal">Where should invoices be sent? </h3>
                    </div>
                </div>
                <div className="lg:w-3/4 w-full lg:pl-20 pl-0">
                    <div>
                        <div className="flex flex-col mt-6">
                            <BaseRadio
                                change={checkForAddress}
                                id="isSame"
                                name="isSameSampleCollectionAddress"
                                value={'true'}
                            >
                                <div className="">
                                    <h1 className="text-[#344054] text-[14px] font-medium leading-6">
                                        Send to my account email
                                    </h1>
                                    <h3 className="text-[#667085] text-[14px] font-normal">olivia@untitledui.com</h3>
                                </div>
                            </BaseRadio>
                            <BaseRadio
                                change={checkForAddress}
                                id="isNotSame"
                                name="isSameSampleCollectionAddress"
                                value={'false'}
                                styles="w-full"
                                checked
                            >
                                <div className="w-3/4">
                                    <h1 className="text-[#344054] text-[14px] font-medium leading-6">
                                        Send to an alternative email
                                    </h1>
                                    <BaseInput
                                        id="alternative-email"
                                        name="alternative-email"
                                        label=""
                                        value="billing@untitledui.com"
                                        styleClass="mt-2"
                                    />
                                </div>
                            </BaseRadio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillingContactSection;
