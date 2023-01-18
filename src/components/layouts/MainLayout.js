import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Header from './Header';
import AddPatientModal from '../dashboard/AddPatientModal';
// import BaseModal from '../base/BaseModal';
import { connect } from 'react-redux';
import ToggleSidebar from './ToggleSidebar';
import { LogoutUserAction } from '../../store/actions/AuthenticationAction';
import { AddNewPatientCustomer } from '../../store/actions/PatientActions';
import { GET_USER_TOKEN, scrollToTop } from '../../utils/Helpers';
import InvitePractitionerModal from '../settings/InvitePractitionerModal';
import PropTypes from 'prop-types';
import BaseAlertMessage from '../base/BaseAlertMessage';
import { useNavigate } from 'react-router-dom';

const MainLayout = (props) => {
    const { AddNewPatientCustomer, patientSuccess, title, children, loggedInUser, LogoutUserAction } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isInvite, setIsInvite] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const token = GET_USER_TOKEN();
    const router = useNavigate();

    const closeModal = () => {
        setIsOpen(false);
        setResetKey(resetKey + 1);
    };

    const toggleSide = () => {
        setToggle(!toggle);
    };

    const gotoProfile = () => {
        router('/dashboard/settings');
    };

    const openInvite = () => {
        setIsInvite(true);
    };

    const closeInvite = () => {
        setIsInvite(false);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <Helmet>
                <title>{title} | Doctor Portal | Health Tracker</title>
            </Helmet>
            {!toggle ? (
                <Sidebar toggleSide={toggleSide} toggle={toggle} token={token} />
            ) : (
                <ToggleSidebar toggleSide={toggleSide} toggle={toggle} token={token} />
            )}
            <Header
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                token={token}
                closeModal={closeModal}
                userInfo={loggedInUser}
                openInvite={openInvite}
                closeInvite={closeInvite}
                LogoutUserAction={LogoutUserAction}
            />
            <main
                className={`relative ${
                    !toggle ? 'main-body' : 'mini-main-body'
                } p-6 transition min-h-screen bg-[#F4F6F8] overflow-y-auto animate__animated animate__fadeInUp`}
            >
                <div className="transition lg:mt-[3rem] mt-20">
                    {(loggedInUser?.uploadLicenseUrl === '' || !loggedInUser?.verificationCode) &&
                        !loggedInUser?.isApproved && (
                            <BaseAlertMessage
                                alertMessage=" Kindly update your account with your Licence . Your account is limited to view only."
                                hasChildren={true}
                                type="warning"
                            >
                                <div className="bg-transparent border-[1px] border-white rounded-lg px-5 ml-12 transition cursor-pointer">
                                    <div className="text-white py-2 cursor-pointer" onClick={gotoProfile}>
                                        Upload your Licence
                                    </div>
                                </div>
                            </BaseAlertMessage>
                        )}
                    {loggedInUser?.uploadLicenseUrl && loggedInUser?.verificationCode && !loggedInUser?.isApproved && (
                        <BaseAlertMessage
                            alertMessage="Your Account is awaiting approval, it’s limited to view only."
                            type="info"
                            styleClass="!py-3"
                        />
                    )}
                    {children}
                    {/*<p>In progress...</p>*/}
                </div>
            </main>

            <AddPatientModal
                key={resetKey}
                isOpen={isOpen}
                closable={true}
                modalSize="small"
                closeModal={closeModal}
                AddNewPatientCustomer={AddNewPatientCustomer}
                loggedInUser={loggedInUser}
                patientSuccess={patientSuccess}
            />

            <InvitePractitionerModal isInvite={isInvite} closeInvite={closeInvite} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.authenticationReducer.loggedInUser,
        patientSuccess: state.patientReducer.patientSuccess,
    };
};

MainLayout.propTypes = {
    title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { LogoutUserAction, AddNewPatientCustomer })(MainLayout);
