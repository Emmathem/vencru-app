import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import TabMenu from './TabMenu';

const DashboardIndex = () => {
    const [isActive, setIsActive] = useState(5);
    const setActiveTab = (key) => {
        setIsActive(key);
    };
    return (
        <>
            <MainLayout title="Dashboard" pageTitle="Settings" subPageTitle="Manage your team and preference here">
                <TabMenu setActiveTab={setActiveTab} isActive={isActive} />
            </MainLayout>
        </>
    );
};

export default DashboardIndex;
