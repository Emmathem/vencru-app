import React from 'react';
import ProductLogo from '../../assets/img/project_logo.png';
import { navMenu } from '../../data/utils';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = (props) => {
    const { toggleSide, token } = props;
    const styles = {
        menuItems: `flex gap-3 py-3 transition text-lg px-3 mb-2 rounded-md items-center menuItem_text cursor-pointer hover:bg-gray-100 hover:text-[#fff]`,
    };
    const router = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const goToRoute = (item) => {
        router(item.route);
    };

    return (
        <div className="sidebar sidebar__width rounded-r-lg h-screen bg-[#0C4654] px-5 py-10 transition">
            <div onClick={() => router('/dashboard')} className="cursor-pointer">
                <img src={ProductLogo} alt="logo" />
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
                                    {/*{nav.icon}*/}
                                    <img src={nav.icon} alt="icon" />
                                    <span>{nav.name}</span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="absolute bottom-[3rem] transition">
                <div
                    className="flex bg-[#FFFFFF14] py-2 px-4 cursor-pointer rounded-md text-white"
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
