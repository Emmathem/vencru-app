import React, { useRef, useState } from 'react';
import ProductLogo from '../../assets/img/project_logo.png';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from 'react-icons/ri';
import { navMenu } from '../../data/utils';

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef(null);

    // const router = useNavigate();
    // const location = useLocation();
    // // const pathname = location.pathname;
    // const goToRoute = (item) => {
    //     router(item.route);
    // };
    return (
        <>
            <header className="lg:hidden flex w-full items-center justify-between bg-white h-[75px] transition px-6 py-4 border-b-2 border-[#EAECF0]">
                <Link to="/dashboard" className="cursor-pointer flex items-center">
                    <img src={ProductLogo} alt="logo" />
                    <h4 className="text-2lg font-bold pl-2">Untitled UI</h4>
                </Link>
                <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <RiMenu2Fill size="30px" className="text-[#667085]" />
                </div>
            </header>
            <div ref={node}>
                <div
                    className={`flex flex-col ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-white text-left transition h-screen fixed top-[4rem] left-0 z-[9999] overflow-y-auto p-6 w-full`}
                >
                    {navMenu.main?.map((res, index) => (
                        <React.Fragment key={index}>
                            <Link
                                href={res.route}
                                className="flex textbrandColor justify-between mb-1 border-b border-[#E2E2E2] py-4 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <img src={res.icon} alt="icon" className="mr-3 w-[25px]" />
                                    <span>{res.name}</span>
                                </div>
                                {res.hasCount && (
                                    <span className="rounded-[16px] w-[36px] flex justify-center items-center bg-[#F2F4F7]">
                                        10
                                    </span>
                                )}
                            </Link>
                        </React.Fragment>
                    ))}
                    <div className="pt-3">
                        {navMenu.others?.map((res, index) => (
                            <React.Fragment key={index}>
                                <Link
                                    href={'/store'}
                                    className="flex textbrandColor justify-between mb-1 border-b border-[#E2E2E2] py-4 cursor-pointer"
                                >
                                    <div className="flex items-center">
                                        <img src={res.icon} alt="icon" className="mr-3 w-[25px]" />
                                        <span>{res.name}</span>
                                    </div>
                                    {res.hasCount && (
                                        <span className="rounded-[16px] w-[36px] flex justify-center items-center bg-[#F2F4F7]">
                                            10
                                        </span>
                                    )}
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileHeader;
