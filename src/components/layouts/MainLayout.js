import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
// import Header from './Header';
// import ToggleSidebar from './ToggleSidebar';
import { scrollToTop } from '../../utils/Helpers';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

const MainLayout = (props) => {
    const { title, children } = props;
    // const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    // const [resetKey, setResetKey] = useState(0);
    const token = '049093093';
    // const router = useNavigate();

    // const closeModal = () => {
    //     setIsOpen(false);
    //     setResetKey(resetKey + 1);
    // };

    const toggleSide = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <Helmet>
                <title>{title} | Untitled App</title>
            </Helmet>
            <Sidebar toggleSide={toggleSide} toggle={toggle} token={token} />
            {/*{!toggle ? (*/}
            {/*    <Sidebar toggleSide={toggleSide} toggle={toggle} token={token} />*/}
            {/*) : (*/}
            {/*    <ToggleSidebar toggleSide={toggleSide} toggle={toggle} token={token} />*/}
            {/*)}*/}
            {/*<Header
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                token={token}
                closeModal={closeModal}
                userInfo={loggedInUser}
                LogoutUserAction={LogoutUserAction}
            />*/}
            <main
                className={`relative ${
                    !toggle ? 'main-body' : 'mini-main-body'
                } p-6 transition min-h-screen bg-[#F4F6F8] overflow-y-auto animate__animated animate__fadeInUp`}
            >
                <div className="transition lg:mt-[3rem] mt-20">
                    {children}
                    {/*<p>In progress...</p>*/}
                </div>
            </main>
        </>
    );
};

MainLayout.propTypes = {
    title: PropTypes.string.isRequired,
};

export default MainLayout;
