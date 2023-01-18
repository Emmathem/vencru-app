import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Header from './Header';
import { scrollToTop } from '../../utils/Helpers';
import PropTypes from 'prop-types';
import MobileHeader from './MobileHeader';

const MainLayout = (props) => {
    const { title, pageTitle, subPageTitle, children } = props;
    const [toggle, setToggle] = useState(false);
    const token = '049093093';

    const toggleSide = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="bg-[#F9FAFB]">
            <Helmet>
                <title>{title} | Untitled App</title>
            </Helmet>
            <MobileHeader />
            <Sidebar toggleSide={toggleSide} toggle={toggle} token={token} />
            <main
                className={`relative main-body transition min-h-screen overflow-y-auto animate__animated animate__fadeInUp`}
            >
                <div className="transition">
                    <Header pageTitle={pageTitle} subPageTitle={subPageTitle} />
                    <div className="px-6 pt-8">{children}</div>
                </div>
            </main>
        </div>
    );
};

MainLayout.propTypes = {
    title: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
};

export default MainLayout;
