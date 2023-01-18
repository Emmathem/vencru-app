import React from 'react';
import ProductLogo from '../../assets/img/project_logo.png';
import { navMenu } from '../../data/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const Sidebar = (props) => {
    const { toggleSide, token } = props;
    const styles = {
        menuItems: `flex justify-between gap-3 py-3 transition text-md px-3 mb-1 rounded-md items-center menuItem_text cursor-pointer hover:bg-gray-100 hover:text-[#fff]`,
    };
    const router = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const goToRoute = (item) => {
        router(item.route);
    };

    return (
        <div className="sidebar sidebar__width h-screen bg-white px-5 py-10 transition">
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
                                        <span>{nav.name}</span>
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
            <div className="mt-8 transition">
                {token !== undefined && (
                    <div className="flex flex-col w-full h-full transition gap-3">
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
                                        <span>{nav.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="absolute bottom-[3rem] transition">
                <div
                    className="flex bg-[#FFFFFF14] py-2 px-4 cursor-pointer rounded-md text-[#344054]"
                    onClick={toggleSide}
                >
                    {/*<img src={ToggleIcon} alt="toggle" className="pl-0" />*/}
                    <span className="pl-4">Toggle Sidebar</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
