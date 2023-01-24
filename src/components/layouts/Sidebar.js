import React from 'react';
import ProductLogo from '../../assets/img/project_logo.png';
import ProductImage from '../../assets/img/NewImage.png';
import ProfileImage from '../../assets/img/AvatarImg.png';
import { navMenu } from '../../data/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = (props) => {
    const { toggleSide, token } = props;
    const styles = {
        menuItems: `flex justify-between gap-3 py-2 transition text-md px-3 mb-1 rounded-md items-center menuItem_text cursor-pointer hover:bg-gray-100 hover:text-[#fff]`,
    };
    const router = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const goToRoute = (item) => {
        router(item.route);
    };

    return (
        <aside className="sidebar sidebar__width h-screen bg-white px-5 py-10 transition overflow-y-auto">
            <div onClick={() => router('/dashboard')} className="cursor-pointer flex items-center">
                <img src={ProductLogo} alt="logo" />
                <h4 className="text-2xl font-bold pl-3">Untitled UI</h4>
            </div>
            <div className="flex justify-between items-center h-12 rounded-lg border border-gray-300 transition px-3 mt-8">
                <BiSearch className="ml-1" size="23px" />
                <input type="text" placeholder="Search" className="h-full border-0 pl-3 focus:outline-none" />
            </div>
            <div className="mt-8 transition">
                {token !== undefined && (
                    <div className="w-full h-full transition gap-3">
                        {navMenu?.main.map((nav, index) => {
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
                                    <div className="flex items-center">
                                        <img src={nav.icon} alt="icon" className="mr-3 w-[25px]" />
                                        <span className="text-[#344054]">{nav.name}</span>
                                    </div>
                                    {nav.hasCount && (
                                        <span className="rounded-[16px] w-[36px] flex justify-center items-center bg-[#F2F4F7]">
                                            10
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="mt-6 transition">
                {token !== undefined && (
                    <div className="flex flex-col w-full h-full transition">
                        {navMenu?.others.map((nav, index) => {
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
                                    <div className="flex items-center">
                                        <img src={nav.icon} alt="icon" className="mr-3 w-[25px]" />
                                        <span className="text-[#344054]">{nav.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="bg-[#F9FAFB] mt-3 rounded-md p-4 transition-all">
                <h3 className="text-[#101828]">New features available!</h3>
                <p className="text-[#667085] text-[14px]">Check out the new dashboard view. Pages now load faster. </p>
                <img src={ProductImage} alt="ProductImage" className="my-2 cursor-pointer" />
                <div className="flex items-center pt-2">
                    <span className="text-[#667085] font-normal cursor-pointer">Dismiss</span>
                    <span className="pl-3 text-[#6941C6] font-normal cursor-pointer">What's new?</span>
                </div>
            </div>
            <div className="h-[1px] bg-[#EAECF0] my-8" />
            <div className="w-full transition">
                <div
                    className="flex justify-between bg-[#FFFFFF14] py-2 cursor-pointer rounded-md text-[#344054]"
                    onClick={toggleSide}
                >
                    <div className="flex items-center">
                        <img src={ProfileImage} alt="toggle" className="pl-0" />
                        <div className="px-2 text-[14px]">
                            <p className="text-[#101828] font-medium">Olivia Rhye</p>
                            <p>olivia@untitledui.com</p>
                        </div>
                    </div>
                    <FiLogOut size="30px" className="text-[#667085]" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
