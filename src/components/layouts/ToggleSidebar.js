import React from 'react';
import HealthLogoIcon from '../../assets/img/HEALTH_TRACKA_ICON.svg';
import ToggleIcon from '../../assets/img/toggleIcon.svg';
import { navMenu } from '../../data/utils';
import { useLocation, useNavigate } from 'react-router-dom';

const ToggleSidebar = (props) => {
    const { toggleSide, token } = props;
    const styles = {
        menuItems: `flex gap-3 py-3 transition text-lg px-3 mb-2 rounded-md items-center menuItem_text cursor-pointer hover:bg-gray-100 hover:text-[#fff]`,
    };
    const router = useNavigate();
    const { pathname } = useLocation();
    // const pathname = location.pathname;
    const goToRoute = (item) => {
        router(item.route);
    };

    return (
        <div className="mini-sidebar mini-sidebar__width rounded-r-lg h-screen bg-[#0C4654] px-5 py-10 transition">
            <div
                onClick={() => router('/dashboard/dashboard')}
                className="flex justify-center pr-4 pt-4 pl-4 pb-0 cursor-pointer"
            >
                <img src={HealthLogoIcon} alt="logo" style={{ width: '150px' }} />
            </div>
            <div className="mt-12 transition">
                {token !== undefined && (
                    <div className="flex flex-col w-full h-full transition gap-3">
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
                                    <img src={nav.icon} alt="navicon" className="m-auto" />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="absolute bottom-[3rem] transition">
                <div
                    className="flex bg-[#FFFFFF14] py-4 px-4 cursor-pointer rounded-md text-white"
                    onClick={toggleSide}
                >
                    <img src={ToggleIcon} alt="toggle" className="pl-0" />
                    {/*<span className="pl-4">Toggle Sidebar</span>*/}
                </div>
            </div>
        </div>
    );
};

export default ToggleSidebar;
