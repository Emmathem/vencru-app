import React, { useState } from 'react';
// import { Table } from 'antd';
import { planRecord } from '../../../data/utils';
import downloadIcon from '../../../assets/img/icons/downloadIcon.svg';
import { CurrencySign, formatAmount } from '../../../utils/Helpers';
import { BsArrowDown } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import BaseCheckbox from '../../base/BaseCheckbox';

const BillingRecordSection = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(planRecord.map((li) => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== id));
        }
    };
    return (
        <div className="mt-8">
            <div className="flex items-center justify-between">
                <h2 className="text-[#101828] font-medium text-lg">Billing history</h2>
                <div className="flex items-center rounded-lg bg-white p-2 transition border border-gray-300 px-3 text-[#344054] text-[14px] font-medium cursor-pointer">
                    <img src={downloadIcon} alt="downloadIcon" />
                    <span className="pl-2">Download all</span>
                </div>
            </div>
            <div className="my-6 mb-12 rounded-lg overflow-hidden">
                <div className="overflow-x-auto lg:overflow-x-hidden pb-16 md:w-full">
                    <table className="w-full table-fixed overflow-x-auto bg-white shadow-md">
                        <thead className="text-[#667085] border border-[#EAECF0] overflow-hidden font-normal text-[12px]">
                            <tr className="bg-[#F9FAFB]">
                                <th className="py-4 pl-5 pb-[9px] w-[25px]">
                                    <div className="flex items-center pr-4 mb-2">
                                        <BaseCheckbox
                                            name="selectAll"
                                            id="selectAll"
                                            handleClick={handleSelectAll}
                                            isChecked={isCheckAll}
                                        />
                                    </div>
                                </th>
                                <th className="w-1/4 text-left">
                                    <div className="flex items-center">
                                        <span className="pl-6">Invoice</span>
                                        <BsArrowDown />
                                    </div>
                                </th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Users on Plan</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {planRecord?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <tr className="py-2 border border-[#EAECF0] hover:bg-gray-100">
                                        <td className="py-6 px-6">
                                            <div className="px-2 flex justify-center w-[25px]">
                                                <div className="p-4 pl-3 pb-[9px]">
                                                    <div className="flex items-center mr-4 mb-2">
                                                        <BaseCheckbox
                                                            key={item.id}
                                                            name={item.planName}
                                                            id={item.id}
                                                            handleClick={handleClick}
                                                            isChecked={isCheck.includes(item.id)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-[#101828] text-[14px] pl-6">{item.planName}</div>
                                        </td>
                                        <td>
                                            <div className="text-[#667085] text-center text-[14px]">
                                                USD {CurrencySign}
                                                {formatAmount(item.amount)}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-[#667085] text-[14px] text-center">{item.date}</div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <span className="flex items-center bg-[#ECFDF3] rounded-[16px] px-2 py-2 text-[#027A48] w-fit text-[12px]">
                                                    <FcCheckmark />
                                                    <span className="pl-2">{item.status}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center">
                                                {item.users.length > 5 ? (
                                                    <>
                                                        {item.users.slice(0, 5).map((user, index) => (
                                                            <React.Fragment key={index}>
                                                                <img src={user.avatar} alt="user" className="-ml-2" />
                                                            </React.Fragment>
                                                        ))}
                                                        <div className="flex items-center justify-center w-[24px] h-[24px] -ml-2 rounded-full border-2 p-1 border-white bg-[#F9FAFB]">
                                                            <span className="text-[11px] font-medium">
                                                                +{item.users.length - 5}
                                                            </span>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        {item.users.map((user, index) => (
                                                            <React.Fragment key={index}>
                                                                <img src={user.avatar} alt="user" className="-ml-2" />
                                                            </React.Fragment>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cursor-pointer flex justify-center">
                                                <img src={downloadIcon} alt="downloadIcon" />
                                            </div>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingRecordSection;
