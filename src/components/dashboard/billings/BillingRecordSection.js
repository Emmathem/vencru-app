import React from 'react';
import { BsCloudDownload } from 'react-icons/bs';
import { Table } from 'antd';
import { planRecord } from '../../../data/utils';

const BillingRecordSection = () => {
    const columns = [
        {
            title: 'Invoice',
            dataIndex: 'planName',
        },
        {
            title: 'Amount',
        },
        {
            title: 'Date',
        },
        {
            title: 'Status',
        },
        {
            title: 'Users on Plan',
        },
    ];

    const rowSelection = () => {};
    return (
        <div className="mt-8">
            <div className="flex items-center justify-between">
                <h2 className="text-[#101828] font-medium text-lg">Billing history</h2>
                <div className="flex items-center rounded-lg bg-white p-2 transition border border-gray-300 px-3 text-[#344054] text-[14px] font-medium cursor-pointer">
                    <BsCloudDownload />
                    <span className="pl-1">Download all</span>
                </div>
            </div>
            <div className="my-6 mb-12 rounded-lg overflow-hidden shadow-md">
                <Table columns={columns} rowSelection={rowSelection} data={planRecord} />
            </div>
        </div>
    );
};

export default BillingRecordSection;
