import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageHeader = ({
    breadPrev,
    breadCurrent,
    backRoute,
    children,
    middleNav,
    middleRoute,
    hasMiddle = false,
    has_children = false,
}) => {
    const router = useNavigate();

    const goBackDirection = (route) => {
        router(route);
    };
    return (
        <div className="flex justify-between items-center">
            <nav className="flex py-3" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center" onClick={() => goBackDirection(backRoute)}>
                        <span className="cursor-pointer inline-flex items-center text-md lg:text-lg font-[400] text-[#A0A1B9] hover:text-gray-600 dark:text-[#A0A1B9] dark:hover:text-gray-600">
                            <svg
                                className="mr-2 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            {breadCurrent}
                        </span>
                    </li>
                    {hasMiddle && (
                        <li onClick={() => goBackDirection(middleRoute)}>
                            <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 text-gray-400 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="cursor-pointer inline-flex items-center text-md lg:text-lg font-[400] text-[#A0A1B9] hover:text-gray-600 dark:text-[#A0A1B9] dark:hover:text-gray-600">
                                    {middleNav}
                                </span>
                            </div>
                        </li>
                    )}
                    <li>
                        <div className="flex items-center">
                            <svg
                                className="w-4 h-4 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="cursor-pointer ml-1 text-lg font-medium text-[#0C4654] hover:text-[#04313c] hover:text-[#0C4654] md:ml-2 dark:text-[#0C4654]">
                                {breadPrev}
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            {has_children && (
                <div className="col float-right ml-auto">
                    <div className="text-right clearfix">{children}</div>
                </div>
            )}
        </div>
    );
};

PageHeader.propTypes = {
    breadPrev: PropTypes.string.isRequired,
    breadCurrent: PropTypes.string.isRequired,
};

export default PageHeader;
