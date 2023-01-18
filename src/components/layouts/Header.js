import React, { useEffect, useRef, useState } from 'react';
import BaseButton from '../base/BaseButton';
import UserIcon from '../../assets/img/userIcon.svg';
import CloseIcon from '../../assets/img/icon/closeIcon.svg';
import BellIcon from '../../assets/img/icon/BellIcon.svg';
import HelpIcon from '../../assets/img/icon/drop/helpIcon.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import HealthLogo from '../../assets/img/healthlogo.png';
import MenuIcon from '../../assets/img/icon/menuIcon.svg';
import { navMenu } from '../../data/utils';
import SettingNavIcon from '../../assets/img/icon/drop/Settings.svg';
import PrivacyIcon from '../../assets/img/icon/drop/PrivacyIcon.png';
import LogoutIcon from '../../assets/img/icon/drop/Logout.svg';
import InviteIcon from '../../assets/img/icon/drop/InviteIcon.svg';
import { FaChevronDown } from 'react-icons/fa';
import { getTitle } from '../../utils/Helpers';

const Header = (props) => {
    const { setIsOpen, userInfo, LogoutUserAction, openInvite, token } = props;
    const [isShow, setIsShow] = useState(false);
    const [isDropDown, setIsDropDown] = useState(false);
    const [isPath, setIsPath] = useState(false);

    const showMenu = () => {
        setIsShow(!isShow);
    };
    const styles = {
        menuItems: `flex gap-3 py-2 transition justify-center text-lg px-3 mb-1 rounded-md items-center menuItem_text cursor-pointer hover:bg-text-[#fff] hover:text-[#fff]`,
        dropMenu: `flex gap-3 items-center px-3 py-2 transition cursor-pointer hover:bg-gray-100 overflow-hidden`,
    };

    const menuRef = useRef(null);
    const dropDownRef = useRef(null);

    const router = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const toHome = async () => {
        await LogoutUserAction();
        await router('/login');
    };
    const goToRoute = (item) => {
        router(item.route);
        setIsShow(false);
    };

    useEffect(() => {
        const getPath = () => {
            if (
                pathname === '/dashboard/dashboard' ||
                pathname === '/dashboard/my-patients' ||
                pathname === '/dashboard/order'
            ) {
                setIsPath(true);
            } else {
                setIsPath(false);
            }
        };
        getPath();
    }, []);

    useEffect(() => {
        const dropEffectClick = (e) => {
            if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
                setIsShow(!isShow);
            }
        };
        if (isShow) {
            window.addEventListener('click', dropEffectClick);
        }
        return () => {
            window.removeEventListener('click', dropEffectClick);
        };
    }, [isShow]);

    useEffect(() => {
        const dropDownEffectClick = (e) => {
            if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target)) {
                setIsDropDown(!isDropDown);
            }
        };
        if (isDropDown) {
            window.addEventListener('click', dropDownEffectClick);
        }
        return () => {
            window.removeEventListener('click', dropDownEffectClick);
        };
    }, [isDropDown]);
    return (
        <>
            <div className="lg:flex hidden h-[65px] flex-end justify-end w-full bg-white fixed items-center top-0 z-50">
                <div className={`flex items-center mr-8 transition`}>
                    {isPath && (
                        <BaseButton
                            text="Add a Patient"
                            variant="primary"
                            styles="!px-2 w-3/4 !py-3"
                            click={() => setIsOpen(true)}
                        />
                    )}
                    <div
                        className={`bg-[#F4F6F8] h-12 ml-3 flex items-center p-1 rounded-md justify-center relative cursor-pointer`}
                        style={{ width: isPath ? '7rem' : '3rem' }}
                    >
                        <img src={BellIcon} alt="bell" width={20} />
                        <div className="notification justify-center">
                            <span className="text-[14px]">0</span>
                        </div>
                    </div>
                    {token !== undefined && (
                        <>
                            <div
                                ref={dropDownRef}
                                className={`flex ${
                                    isPath && 'w-full'
                                } h-12 ml-4 items-center p-2 px-4 bg-[#F4F6F8] relative rounded-md cursor-pointer`}
                                onClick={() => setIsDropDown(!isDropDown)}
                            >
                                <img src={UserIcon} alt="usericon" />
                                <span className="pr-3 pl-2 font-[400]">
                                    {getTitle(userInfo?.practitionerTypeId) +
                                        ' ' +
                                        userInfo?.firstName +
                                        ' ' +
                                        userInfo?.lastName}
                                </span>
                                <FaChevronDown />
                            </div>
                        </>
                    )}
                </div>
                <div
                    className="absolute shadow-md bg-white top-[4.1rem] right-[2rem] transition rounded-t-md"
                    style={{ display: isDropDown ? 'block' : 'none' }}
                >
                    <div className={styles.dropMenu} onClick={() => router('/dashboard/settings')}>
                        <img src={SettingNavIcon} alt="icon2" />
                        <span>Account Settings</span>
                    </div>
                    <div className={styles.dropMenu} onClick={openInvite}>
                        <img src={InviteIcon} alt="icon2" />
                        <span>Invite a Practitioner</span>
                    </div>
                    <div className={styles.dropMenu} onClick={() => router('/dashboard/help-desk')}>
                        <img src={HelpIcon} alt="icon2" />
                        <span>Help and Info</span>
                    </div>
                    <div className={styles.dropMenu}>
                        <img src={PrivacyIcon} alt="icon2" />
                        <span>Privacy</span>
                    </div>
                    <div className={styles.dropMenu} onClick={toHome}>
                        <img src={LogoutIcon} alt="icon2" />
                        <span>Sign Out</span>
                    </div>
                </div>
            </div>
            <div className="lg:hidden fixed brandColor z-50 w-full sm:flex flex h-[88px] items-center justify-between px-5 transition rounded-b-[24px]">
                <div>
                    <img src={HealthLogo} alt="logo" />
                </div>
                <div ref={menuRef} onClick={showMenu} className="cursor-pointer">
                    {!isShow ? <img src={MenuIcon} alt="menu" /> : <img src={CloseIcon} alt="menu" />}
                </div>
            </div>
            {isShow && (
                <div
                    className={`fixed top-[4rem] z-10 animate__animated animate__slideInDown duration-100 rounded-b-[24px] w-full bg-[#0C4654] p-4 transition`}
                >
                    <div className={`flex flex-col justify-center w-full h-full transition gap-3 pt-2`}>
                        {navMenu.map((nav, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.menuItems}
                                    style={{
                                        color: nav.route === pathname && '#FFF',
                                        background: nav.route === pathname && '#F2F8FA28',
                                    }}
                                    onClick={() => goToRoute(nav)}
                                >
                                    <img src={nav.icon} alt="icon" />
                                    <span className="font-black">{nav.name}</span>
                                </div>
                            );
                        })}
                        <div className={styles.menuItems} onClick={toHome}>
                            <span className="font-black text-white">
                                {getTitle(userInfo?.practitionerTypeId) +
                                    ' ' +
                                    userInfo?.firstName +
                                    ' ' +
                                    userInfo?.lastName}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
